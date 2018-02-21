import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../assets/tooltips'

export default {
  name: 'Login',
  data () {
    return {
      company: '校园招聘'
    }
  },
  components: {
    Popper
  },
  computed: {
    loginMsg () {
      return LOGIN_ACCOUNT
    },
    forgetPwd () {
      return FORGET_PWD
    }
  },
  methods: {
  },
  created () {
  }
}
