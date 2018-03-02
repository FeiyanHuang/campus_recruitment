import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import { LOGIN_ACCOUNT, FORGET_PWD } from '../../assets/tooltips'
import { fetchViewApi } from '../../api/user'

export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
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
      'loginAdmin',
      'logoutUser'
    ]),
    logout () {
      this.logoutUser()
    }
  },
  created () {
    const id = this.$route.params.id
    fetchViewApi(id,(res, err) => {
      if (err) {
        // alert('获取用户列表失败')
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
        this.loading = false
      } else {
        this.job = res
        this.loading = false
      }
    })
  }
}
