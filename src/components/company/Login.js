import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'

export default {
  name: 'Login',
  data () {
    return {
      title: '企业',
      company_name: null,
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
      'loginCompany'
    ]),
    login () {
      this.loginCompany({ company_name: this.company_name, password: this.password })
    }
  },
  created () {
  }
}