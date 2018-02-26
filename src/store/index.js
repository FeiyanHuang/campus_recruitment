import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
import { loginAdminApi, loginStudentApi, loginCompanyApi } from '../api/user.js'
import * as types from './mutation-types.js'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

Vue.use(Vuex)

/* eslint-disable */
const state = {
  currentUser: null
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
  // Admin登录
  loginAdmin ({ commit }, paras) {
    loginAdminApi(paras.admin, paras.password, (res, err) => {
      if (err) {
        Vue.swal({
          type: 'error',
          text: '登录失败'
        })
      } else {
        commit(types.LOGIN, res)
      }
    })
  },
  // student登录
  loginStudent ({ commit }, paras) {
    loginStudentApi(paras.student_id, paras.password, (res, err) => {
      if (err) {
        Vue.swal({
          type: 'error',
          text: '登录失败'
        })
      } else {
        commit(types.LOGIN, res)
      }
    })
  },
  // company登录
  loginCompany ({ commit }, paras) {
    loginCompanyApi(paras.company_name, paras.password, (res, err) => {
      if (err) {
        Vue.swal({
          type: 'error',
          text: '登录失败'
        })
      } else {
        commit(types.LOGIN, res)
      }
    })
  },
  logoutUser ({ commit }) {
    commit(types.LOGOUT)
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.currentUser = user
    // window.location.href = '/'
  },
  [types.LOGOUT] (state) {
    state.currentUser = null
    window.location.href = '/login'
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: false,
  plugins: [createPersist({
    namespace: 'campus_recruitment',
    initialState: {},
    expires: 60 * 60 * 1e3 // one day
  })]
})

export default store
