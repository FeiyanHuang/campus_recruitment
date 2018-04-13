import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { addCompanyJobApi, fetchCompanyJobApi, updateCompanyJobApi } from '../../api/user'

export default {
  name: 'AddJob',
  data () {
    return {
      job: {
        id: "",
        job_name: "",
        price: "",
        content: "",
        persons: "",
        education: "",
        j_address: "",
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
      'currentUser',
      'admin',
      'student',
      'company'
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
        this.$router.push('/company/job/list')
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
      })
    }
  },
  created () {
    if(this.currentUser && this.company){
      const id = this.$route.params.id
      console.log(id)
      if (parseInt(id) !== 0) {
        this.createMode = false
        fetchCompanyJobApi(id, (res, err) => {
          if (err) {
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
    }else{
      Vue.swal({
        type: 'error',
        text: '权限不够请先登录'
      })
      this.$router.push('/company/login')
    }

  }
}
