import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage.vue'

import AdminLogin from '../components/admin/Login.vue'
import CompanyList from '../components/admin/CompanyList.vue'
import AdminJobList from '../components/admin/JobList.vue'
import AdminJobCheck from '../components/admin/JobCheck.vue'

import StudentLogin from '../components/student/Login.vue'
import StudentJobList from '../components/student/JobList.vue'
import StudentViewDetails from '../components/student/viewDetails.vue'

import CompanyLogin from '../components/company/Login.vue'
import CompanyRegister from '../components/company/Register.vue'
import CompanyJobList from '../components/company/JobList.vue'
import CompanyAddJob from '../components/company/AddJob.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // 首页index
    { path: '/homepage', component: Homepage },
    // 管理员
    { path: '/admin/login', component: AdminLogin },
    { path: '/admin/company/list', component: CompanyList },
    { path: '/admin/job/list', component: AdminJobList },
    { path: '/admin/job/check/:id', component: AdminJobCheck },
    // 学生
    { path: '/student/login', component: StudentLogin },
    { path: '/student/job/list', component: StudentJobList },
    { path: '/student/view/:id', component: StudentViewDetails },
    // 公司
    { path: '/company/login', component: CompanyLogin },
    { path: '/company/register/:id', component: CompanyRegister },
    { path: '/company/job/list', component: CompanyJobList },
    { path: '/company/addjob', component: CompanyAddJob },
    { path: '/company/addjob/:id', component: CompanyAddJob },
    { path: '/', redirect: '/homepage' }
  ]
})
