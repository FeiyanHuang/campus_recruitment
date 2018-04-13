import Vue from 'vue'
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchViewApi,passJobApi, failJobApi } from '../../api/user'

export default {
  name: 'ViewDetails',
  data () {
    return {
      title: '管理员',
      check: '',
      job: {
        'j_id': "1",
        'job_name': "前端开发",
        'price': "1000-2000",
        'c_content': "公司简介2",
        'j_content': "公司简介2",
        'persons': "1",
        'status': "1",
        'c_id': "2",
        'company_name': "公司B",
        'password': "123",
        'boss': "黄飞燕2",
        'tel': "17858952904",
        'email': "515978951@qq.com",
        'address': "浙江湖州",
        'type': "科技有限公司",
        'disable': "0"
      }
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
    ]),
    loginMsg () {
      return LOGIN_ACCOUNT
    },
    forgetPwd () {
      return FORGET_PWD
    }
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
        if (err) {
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
    if(this.currentUser){
      const id = this.$route.params.id
      const full = this.$route.fullPath
      this.check = (full=='/admin/job/check/'+id)?true:false
      console.log(this.check)
      fetchViewApi(id,(res, err) => {
        if (err) {
          // alert('获取用户列表失败')
          Vue.swal({
            type: 'error',
            text: '获取用户列表失败'
          })
        } else {
          this.job = res
        }
      })
    }else{
      Vue.swal({
        type: 'error',
        text: '请先登录'
      })
      this.$router.push('/homepage')
    }
  }
}
