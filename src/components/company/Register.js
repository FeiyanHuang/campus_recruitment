import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { registerCompanyApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      company: {
        id: "",
        company_name: "",
        password: "",
        boss: "",
        tel: "",
        email: "",
        address: "",
        type: "",
        content: ""
      }
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
    create () {
      registerCompanyApi(this.company, (res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '创建用户失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '创建用户成功'
          })
        }
      })
    }
  },
  created () {
  }
}
