import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { loginAdminApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null
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
    ]),
    login () {
      this.loginAdmin({ admin: this.admin, password: this.password })
    }
  },
  created () {
  }
}
