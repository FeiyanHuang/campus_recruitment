import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../assets/tooltips'
import { fetchSearchJobsApi } from '../api/user'
import {Pagination} from 'vue-pagination-2'

export default {
  name: 'JobList',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      jobs: null,
      search: '',
      page: 1,
      total_records: 0,
      job_name: null,
      c_name: null
    }
  },
  components: {
    Pagination,
    Popper
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'admin',
      'student',
      'company'
    ]),
    loginMsg () {
      return LOGIN_ACCOUNT
    },
    forgetPwd () {
      return FORGET_PWD
    }
  },
  methods: {
    view (id) {
      this.$router.push('/student/view/' + id)
    },
    setPage: function (page) {
      this.page = page
      fetchSearchJobsApi(this.job_name,this.c_name,this.page,(res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
        } else {
          this.jobs = res.jobs
          this.total_records = parseInt(res.count)
        }
      })
    }
  },
  created () {
    if(this.currentUser){
      this.job_name = this.$route.params.job_name
      this.c_name = this.$route.params.c_name
      if (this.job_name !== null & this.c_name !== null){
        fetchSearchJobsApi(this.job_name,this.c_name,this.page,(res, err) => {
          if (err) {
            Vue.swal({
              type: 'error',
              text: '获取用户列表失败'
            })
          } else {
            this.jobs = res.jobs
            this.total_records = parseInt(res.count)
          }
        })
      }
    }else{
      Vue.swal({
        type: 'error',
        text: '请先登录'
      })
      this.$router.push('/homepage')
    }
  }
}
