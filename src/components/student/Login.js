import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'

export default {
  name: 'Login',
  data () {
    return {
      title: '学生',
      student_id: null,
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
      'loginStudent'
    ]),
    login () {
      this.loginStudent({ student_id: this.student_id, password: this.password })
    }
  },
  created () {
  }
}
