import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
// import { loginUserApi, getUserApi } from '../api/user.js'
import * as types from './mutation-types.js'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

Vue.use(Vuex)

/* eslint-disable */
const state = {
  currentUser: null,
  status: 'ready'
}

const getters = {
  currentUser: state => state.currentUser,
  admin: state => state.currentUser &&  state.currentUser.admin,
  status: state => state.status
}

const actions = {
  loginUser ({ commit }, paras) {
    // loginUserApi(paras.email, paras.password, (res, err) => {
    //   if (err) {
    //     Vue.swal({
    //       type: 'error',
    //       text: '登录失败'
    //     })
    //   } else {
    //     commit(types.LOGIN, res)
    //   }
    // })
  },
  getUser ({ commit }, id) {
    // getUserApi(id, (res, err) => {
    //   if (err) {
    //     console.log('getUsersApi err ' + JSON.stringify(err))
    //   } else {
    //     commit(types.GET_USER, res)
    //   }
    // })
  },
  logoutUser ({ commit }) {
    commit(types.LOGOUT)
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.currentUser = user
    window.location.href = '/'
  },
  [types.LOGOUT] (state) {
    state.currentUser = null
    window.location.href = '/login'
  },
  [types.UPDATE_STATUS] (state, status) {
    state.status = status
  },
  [types.GET_USER] (state, user) {
    state.currentUser = user
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: false,
  plugins: [createPersist({
    namespace: 'xiansi',
    initialState: {},
    expires: 60 * 60 * 1e3 // one day
  })]
})

export default store
