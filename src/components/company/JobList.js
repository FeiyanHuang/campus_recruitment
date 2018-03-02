import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchCompanyJobsApi, delCompanyJobApi } from '../../api/user'
import {Pagination} from 'vue-pagination-2'


export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      jobs: null,
      search: null,
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
    updateCompany (id) {
      this.$router.push('/company/register/' + id)
    },
    update (id) {
      this.$router.push('/company/addjob/' + id)
    },
    del (id) {
      delCompanyJobApi(id,(res, err) => {
        if (err) {
          // alert('获取用户列表失败')
          Vue.swal({
            type: 'error',
            text: '删除职位失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '删除职位成功'
          })
          this.$router.push('/company/job/list')
        }
      })
    },
    setPage: function (page) {
      this.page = page
      fetchCompanyJobsApi(this.currentUser.company_name,this.page,(res, err) => {
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
    fetchCompanyJobsApi(this.currentUser.company_name,this.page,(res, err) => {
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
