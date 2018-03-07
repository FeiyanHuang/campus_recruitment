import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { registerCompanyApi, fetchCompanyApi, updateCompanyApi } from '../../api/user'

export default {
  name: 'Register',
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
      },
      createMode: true
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
          this.$router.push('/company/job/list')
        }
      })
    },
    update () {
      updateCompanyApi(this.company, (res, err) => {
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
          this.$router.push('/company/job/list')
        }
      })
    }
  },
  created () {
    const id = this.$route.params.id
    console.log(id)
    //  id = 0, means new user
    if (parseInt(id) !== 0) {
      this.createMode = false
      fetchCompanyApi(id, (res, err) => {
        // this.user = res
        if (err) {
          // alert('无法获取用户')
          Vue.swal({
            type: 'error',
            text: '无法获取用户'
          })
        } else {
          this.company = res
        }
      })
    }
    // this.job.c_name=this.currentUser.company_name
  }
}
