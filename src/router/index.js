import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'

import AdminLogin from '../components/admin/Login.vue'
import CompanyList from '../components/admin/CompanyList.vue'
import AdminJobList from '../components/admin/JobList.vue'

import StudentLogin from '../components/student/Login.vue'
import StudentJobList from '../components/student/JobList.vue'

import CompanyLogin from '../components/company/Login.vue'
import CompanyRegister from '../components/company/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // 首页index
    { path: '/index', component: Index },
    // 管理员
    { path: '/admin/login', component: AdminLogin },
    { path: '/admin/company/list', component: CompanyList },
    { path: '/admin/job/list', component: AdminJobList },
    // 学生
    { path: '/student/login', component: StudentLogin },
    { path: '/student/job/list', component: StudentJobList },
    // 公司
    { path: '/company/login', component: CompanyLogin },
    { path: '/company/register', component: CompanyRegister },
    { path: '/', redirect: '/index' }
  ]
})
