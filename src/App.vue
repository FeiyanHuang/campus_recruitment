<template>
  <div id="app">
    <nav class="navbar navbar-inverse" v-if="currentUser">
      <div class="container container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" :to="{ path: '/homepage' }">校园招聘</router-link>
        </div>
        <ul class="nav navbar-nav" v-if="admin">
          <li>
            <router-link :to="{ path: '/admin/company/list' }">企业管理</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/admin/job/list' }">职位管理</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a @click='bench'>工作台</a></li>
          <!-- <li @click='updateCompany(currentUser.id)' v-if="company"><a>修改'{{this.currentUser.company_name}}'信息</a></li> -->
          <li  @click='logout'><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
    <!-- 导航 -->
    <nav v-if="!currentUser" class="navbar navbar-inverse">
      <div class="container container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" :to="{ path: '/homepage' }">校园招聘</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li ><router-link :to="{ path: '/company/login' }">企业</router-link></li>
          <li ><router-link :to="{ path: '/student/login' }">学生</router-link></li>

          <!-- <span @click='admin_login'>admin</span> -->
          <!-- <span @click='company_login'>company</span>
          <span @click='student_login'>student</span> -->
        </ul>
      </div>
    </nav>
    <div>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'currentUser',
      'admin',
      'student',
      'company'
    ])
  },
  components: {
    Popper
  },
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
    },
    bench () {
      if (this.admin){
        this.$router.push('/admin/job/list')
      } else if (this.company) {
        this.$router.push('/company/job/list')
      } else if (this.student) {
        this.$router.push('/student/job/list')
      }
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/scss/app"
  .navbar-inverse
    background-color: #FE5A00
    border: 0px solid #090909
  // .container
  //   margin-top: 80px
</style>
