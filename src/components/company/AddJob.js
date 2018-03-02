import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { addCompanyJobApi, fetchCompanyJobApi, updateCompanyJobApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      job: {
        id: "",
        job_name: "",
        price: "",
        content: "",
        persons: "",
        c_name: ""
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
    add () {
      addCompanyJobApi(this.job, (res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '创建职位失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '创建职位成功'
          })
        }
        window.location.href = '/company/job/list'
      })
    },
    update () {
      updateCompanyJobApi(this.job, (res, err) => {
        if (err) {
          Vue.swal({
            type: 'error',
            text: '更新职位失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '创建职位成功'
          })
        }
        this.$router.push('/company/job/list')
        // window.location.href = '/company/job/list'
      })
    }
  },
  created () {
    const id = this.$route.params.id
    console.log(id)
    //  id = 0, means new user
    if (parseInt(id) !== 0) {
      this.createMode = false
      fetchCompanyJobApi(id, (res, err) => {
        // this.user = res
        if (err) {
          // alert('无法获取用户')
          Vue.swal({
            type: 'error',
            text: '无法获取用户'
          })
        } else {
          this.job = res
        }
      })
    }
    this.job.c_name=this.currentUser.company_name
  }
}
