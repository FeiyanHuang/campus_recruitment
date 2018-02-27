import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchJobsApi, searchJobsApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      jobs: null,
      search: null
    }
  },
  components: {
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
      searchJobsApi(search,(res, err) => {
        if (err) {
          // alert('获取用户列表失败')
          Vue.swal({
            type: 'error',
            text: '没有匹配项'
          })
          this.loading = false
        } else {
          this.jobs = res
          this.loading = false
        }
      })
    }
  },
  created () {
    fetchJobsApi((res, err) => {
      if (err) {
        // alert('获取用户列表失败')
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
        this.loading = false
      } else {
        this.jobs = res
        this.loading = false
      }
    })
  }
}
