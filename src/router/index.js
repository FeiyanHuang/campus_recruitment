import Vue from 'vue'
import Router from 'vue-router'

import AdminLogin from '../components/admin/Login.vue'
import CompanyList from '../components/admin/CompanyList.vue'
import JobList from '../components/admin/JobList.vue'
import StudentLogin from '../components/student/Login.vue'
import CompanyLogin from '../components/company/Login.vue'
import CompanyRegister from '../components/company/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/admin/login', component: AdminLogin },
    { path: '/admin/company/list', component: CompanyList },
    { path: '/admin/job/list', component: JobList },
    { path: '/student/login', component: StudentLogin },
    { path: '/company/login', component: CompanyLogin },
    { path: '/company/register', component: CompanyRegister }
    // { path: '/', redirect: '/login' }
  ]
})
