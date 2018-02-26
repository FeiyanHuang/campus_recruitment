<template>
  <div id="app">
    <div v-if="currentUser" class="nav">
    </div>
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
      'currentUser'
    ])
  },
  components: {
    Popper
  },
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/scss/app"
  body
    padding-top: 0px
  .nav
    height: 80px
    margin-left: 30px
    margin-right: 30px
  .nav-item
    display: inline-block
    line-height: 80px
  .logout-box
    display: inline-block
    float: right
  .logout-small-box
    line-height: 80px
  .logout-box>.logout-small-box>span
    color: #333
    font-size: 12px
  .router-link-active
    color: #3385ff !important
  .task-link
    margin-right: 15px
    text-decoration: none!important
    color: #666
    font-family: '黑体'
    font-size: 20px
  .user-link
    text-decoration: none!important
    color: #666
    font-family: '黑体'
    font-size: 20px
  .logout-btn
    display: inline-block
    cursor: pointer
    // width: 30px
  .problem
    display: inline-block
    margin-right: 10px
    margin-left: 10px
  .problem-icon
    cursor: pointer
  .popper-box
    margin-top: -20px!important
    line-height: 30px
</style>
