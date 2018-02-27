export default {
  name: 'Login',
  data () {
    return {
      title: '管理员',
      admin: null,
      password: null
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    admin_login () {
      window.location.href = '/admin/login'
    },
    company_login () {
      window.location.href = '/company/login'
    },
    student_login () {
      window.location.href = '/student/login'
    },
  },
  created () {
  }
}
