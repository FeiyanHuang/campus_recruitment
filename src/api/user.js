import Vue from 'vue'
import VueResource from 'vue-resource'
import * as config from './config.js'

Vue.use(VueResource)

// 管理员登录
export function loginAdminApi (admin, password, cb) {
  const baseUrl = config.rootUrl + `admin/admin_login.php?admin=${admin}&password=${password}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginAdminApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginAdminApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 学生登录
export function loginStudentApi (student_id, password, cb) {
  const baseUrl = config.rootUrl + `student/student_login.php?student_id=${student_id}&password=${password}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 企业登录
export function loginCompanyApi (company_name, password, cb) {
  const baseUrl = config.rootUrl + `company/company_login.php?company_name=${company_name}&password=${password}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

//  企业注册
export function registerCompanyApi (company, cb) {
  const baseUrl = config.rootUrl + `company/company_register.php?company_name=${company.company_name}&password=${company.password}&boss=${company.boss}&tel=${company.tel}&email=${company.email}&address=${company.address}&type=${company.type}&content=${company.content}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true},company).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
    console.log('loginStudentApi suc ' + company)
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}


//  企业列表
export function fetchCompanysApi (cb) {
  const baseUrl = config.rootUrl + `admin/company_list.php`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

//  企业列表
export function fetchJobsApi (cb) {
  const baseUrl = config.rootUrl + `admin/job_list.php`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}
