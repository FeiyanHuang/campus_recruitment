import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
import arabic from 'vee-validate/dist/locale/zh_CN'
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
        content: "",
        locale: 'zh'
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
            text: '更新用户失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '更新用户成功'
          })
          this.$router.push('/company/job/list')
        }
      })
    }
  },
  created () {
    this.$validator.localize('zh_CN', {
      messages: arabic.messages,
      attributes: {
        email: '邮箱'
      }
    })
    // start with english locale.
    this.$validator.localize('zh_CN')
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
