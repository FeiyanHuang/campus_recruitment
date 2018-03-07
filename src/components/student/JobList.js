import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchStudentJobsApi } from '../../api/user'
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
    find (search) {
      fetchStudentJobsApi(this.search,this.page,(res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
          // this.loading = false
        } else {
          this.jobs = res.jobs
          this.total_records = parseInt(res.count)
          // this.loading = false
        }
      })
      // searchJobsApi(search,(res, err) => {
      //   if (err) {
      //     // alert('获取用户列表失败')
      //     Vue.swal({
      //       type: 'error',
      //       text: '没有匹配项'
      //     })
      //     // this.loading = false
      //   } else {
      //     this.jobs = res.jobs
      //     this.total_records = parseInt(res.count)
      //     // this.loading = false
      //   }
      // })
    },
    view (id) {
      this.$router.push('/student/view/' + id)
    },
    setPage: function (page) {
      this.page = page
      fetchStudentJobsApi(this.search,this.page,(res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
          // this.loading = false
        } else {
          this.jobs = res.jobs
          // this.loading = false
        }
      })
      this.fetchTasks()
    }
  },
  created () {
    fetchStudentJobsApi(this.search,this.page,(res, err) => {
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
