import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchCompanyJobApi, passJobApi, failJobApi } from '../../api/user'

export default {
  name: 'JonCheck',
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
    pass (id) {
      passJobApi(id, (res, err) => {
        // this.user = res
        if (err) {
          // alert('无法获取用户')
          Vue.swal({
            type: 'error',
            text: '审核失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '审核通过'
          })
        }
        this.$router.push('/admin/job/list')
      })
    },
    failed (id) {
      failJobApi(id, (res, err) => {
        // this.user = res
        if (err) {
          // alert('无法获取用户')
          Vue.swal({
            type: 'error',
            text: '审核失败'
          })
        } else {
          Vue.swal({
            type: 'success',
            text: '审核不通过'
          })
        }
        this.$router.push('/admin/job/list')
      })
    }
  },
  created () {
    const id = this.$route.params.id
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
    // const id = this.$route.params.id
    // console.log(id)
    // //  id = 0, means new user
    // if (parseInt(id) !== 0) {
    //   this.createMode = false
    //
    // }
    // this.job.c_name=this.currentUser.company_name
  }
}
