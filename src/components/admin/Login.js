import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
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
    ])
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
  },
  mounted () {
    let centerY = this.$refs.center.offsetHeight;
    let windowY = window.innerHeight
    let windowX = window.innerWidth
    let center = windowY*0.5-centerY*0.5
    if ( center > 0 ){
      this.$refs.center.style.marginTop = center+"px";
    } else {
      this.$refs.center.style.marginTop = "80px";
    }
  }
}
