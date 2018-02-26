import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchCompanysApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null,
      users: null
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
      'loginAdmin'
    ])
  },
  created () {
    fetchCompanysApi((res, err) => {
      if (err) {
        // alert('获取用户列表失败')
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
        this.loading = false
      } else {
        this.users = res
        this.loading = false
      }
    })
  }
}
