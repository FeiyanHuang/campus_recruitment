import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      title: '管理员'
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
    admin_login () {
      this.$router.push('/admin/login')
    },
    company_login () {
      this.$router.push('/company/login')
    },
    student_login () {
      this.$router.push('/student/login')
    },
  },
  created () {
    // alert(this.admin)
    if (this.currentUser !== null){
      // alert(this.currentUser)
      if (this.admin){
        // alert(this.admin)
        this.$router.push('/admin/job/list')
      } else if (this.student){
        this.$router.push('/student/job/list')
      } else {
        this.$router.push('/company/job/list')
      }
    }
  }
}
