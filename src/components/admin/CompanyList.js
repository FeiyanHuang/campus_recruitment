import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchCompanysApi, toggleCompanyApi } from '../../api/user'
import {Pagination} from 'vue-pagination-2'

export default {
  name: 'CompanyList',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      companys: null,
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
    job_list () {
      window.location.href = '/admin/job/list'
    },
    toggle (id,disable) {
      toggleCompanyApi(id,disable, (res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '禁用企业失败'
          })
        } else {
          window.location.href = '/admin/company/list'
        }
      })
    },
    setPage: function (page) {
      this.page = page
      fetchCompanysApi(this.page,(res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
          this.loading = false
        } else {
          this.companys = res.companys
          this.loading = false
        }
      })
      // this.fetchTasks()
    }
  },
  created () {
    fetchCompanysApi(this.page,(res, err) => {
      if (err) {
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
        this.loading = false
      } else {
        this.companys = res.companys
        this.total_records = parseInt(res.count)
      }
    })
  }
}
