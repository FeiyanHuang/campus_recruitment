<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top" v-if="currentUser">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">校园招聘</a>
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
          <li @click='updateCompany(currentUser.id)' v-if="company"><a>修改'{{this.currentUser.company_name}}'信息</a></li>
          <li  @click='logout'><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
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
      'studnt',
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
    updateCompany (id) {
      this.$router.push('/company/register/' + id)
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/scss/app"
  // .container
  //   margin-top: 80px
</style>
