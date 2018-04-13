import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchCompanyJobsApi, delCompanyJobApi } from '../../api/user'
import {Pagination} from 'vue-pagination-2'


export default {
  name: 'CompanyDetails',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      jobs: null,
      search: null,
      page: 1,
      total_records: 10,
      company_name: null
    }
  },
  components: {
    Pagination,
    Popper
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
    ...mapActions([
      'loginAdmin',
      'logoutUser'
    ]),
    setPage: function (page) {
      this.page = page
      fetchCompanyJobsApi(this.company_name,this.page,(res, err) => {
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
    console.log('a')
    this.company_name = this.$route.params.company
    console.log(this.company_name)
     // id = 0, means new user
    if (this.company_name !== null) {
      fetchCompanyJobsApi(this.company_name,this.page,(res, err) => {
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
}
