import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchJobsApi } from '../../api/user'
import {Pagination} from 'vue-pagination-2'

export default {
  name: 'JobList',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      jobs: null,
      page: 1,
      total_records: 10
    }
  },
  components: {
    Pagination,
    Popper
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ]),
    loginMsg () {
      return LOGIN_ACCOUNT
    },
    forgetPwd () {
      return FORGET_PWD
    }
  },
  methods: {
    ...mapActions([
      'loginAdmin',
      'logoutUser'
    ]),
    logout () {
      this.logoutUser()
    },
    company_list () {
      this.$router.push('/admin/company/list')
    },
    check (id) {
      this.$router.push('/admin/job/check/'+id)
    },
    setPage: function (page) {
      this.page = page
      fetchJobsApi(this.page,(res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
          this.loading = false
        } else {
          this.companys = res.jobs
          this.loading = false
        }
      })
      // this.fetchTasks()
    }
  },
  created () {
    fetchJobsApi(this.page,(res, err) => {
      if (err) {
        // alert('获取用户列表失败')
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
        this.loading = false
      } else {
        this.jobs = res.jobs
        this.total_records = parseInt(res.count)
      }
    })
  }
}
