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
      ],
      job_name: null,
      c_name: null
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
    view (id) {
      this.$router.push('/student/view/' + id)
    },
    find (job_name,c_name) {
      this.$router.push('/job/list/' + job_name + '/' + c_name)
    }
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
