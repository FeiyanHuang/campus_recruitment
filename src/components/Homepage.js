import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { fetchHomepageJobsApi } from '../api/user'

export default {
  name: 'Homepage',
  data () {
    return {
      title: '管理员',
      jobs: [
        {
          id: null,
          job_name: null,
          c_name: null,
          price: null,
          persons: null,
          content: null
        }
      ]
    }
  },
  components: {
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
    // admin_login () {
    //   this.$router.push('/admin/login')
    // },
    // company_login () {
    //   this.$router.push('/company/login')
    // },
    // student_login () {
    //   this.$router.push('/student/login')
    // }
  },
  created () {
    fetchHomepageJobsApi((res, err) => {
      if (err) {
        // alert('获取用户列表失败')
        Vue.swal({
          type: 'error',
          text: '获取用户列表失败'
        })
      } else {
        this.jobs = res
      }
    })
  }
}
