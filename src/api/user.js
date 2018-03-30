import Vue from 'vue'
import VueResource from 'vue-resource'
import * as config from './config.js'

Vue.use(VueResource)

// 首页职位列表
export function fetchHomepageJobsApi (cb) {
  const baseUrl = config.rootUrl + `homepage/job_list.php`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('fetchHomepageJobsApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

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

//  企业列表
export function fetchCompanysApi (page, cb) {
  const baseUrl = config.rootUrl + `admin/company_list.php?page=${page}`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('getUsersApi err ' + JSON.stringify(res))
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 禁用公司
export function toggleCompanyApi (id, disable, cb) {
  const baseUrl = config.rootUrl + `admin/company_disable.php?id=${id}&disable=${disable}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginAdminApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginAdminApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

//  职位列表
export function fetchJobsApi (page, cb) {
  const baseUrl = config.rootUrl + `admin/job_list.php?page=${page}`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 职位审核通过
export function passJobApi (id, cb) {
  const baseUrl = config.rootUrl + `admin/job_pass.php?id=${id}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginAdminApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginAdminApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 职位审核不通过
export function failJobApi (id, cb) {
  const baseUrl = config.rootUrl + `admin/job_fail.php?id=${id}`
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

//  职位列表带职位搜查功能
export function fetchStudentJobsApi (search, page, cb) {
  const baseUrl = config.rootUrl + `student/job_list.php?search=${search}&page=${page}`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// //  职位列表分页查询
// export function searchStudentJobsApi (search,page,cb) {
//   const baseUrl = config.rootUrl + `student/job_list.php?search=${search}&page=${page}`
//   return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
//     cb(res.body)
//   }, (err) => {
//     console.log('getUsersApi err ' + JSON.stringify(err))
//     cb(null, err)
//   })
// }

//查看详情
export function fetchViewApi (id, cb) {
  const baseUrl = config.rootUrl + `student/view_details.php?id=${id}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// // 职位搜查
// export function searchJobsApi (search,cb) {
//   const baseUrl = config.rootUrl + `student/job_search.php?search=${search}`
//   return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
//     cb(res.body)
//   }, (err) => {
//     console.log('getUsersApi err ' + JSON.stringify(err))
//     cb(null, err)
//   })
// }

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

// 获取修改企业信息
export function fetchCompanyApi (id, cb) {
  const baseUrl = config.rootUrl + `company/company_details.php?id=${id}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 修改企业信息
export function updateCompanyApi (company, cb) {
  const baseUrl = config.rootUrl + `company/company_update.php?id=${company.id}&password=${company.password}&boss=${company.boss}&tel=${company.tel}&email=${company.email}&address=${company.address}&type=${company.type}&content=${company.content}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true},company).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 职位列表
export function fetchCompanyJobsApi (company_name,page,cb) {
  const baseUrl = config.rootUrl + `company/job_list.php?company_name=${company_name}&page=${page}`
  return Vue.http.get(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
  }, (err) => {
    console.log('getUsersApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

//  新增职位
export function addCompanyJobApi (job, cb) {
  const baseUrl = config.rootUrl + `company/job_add.php?job_name=${job.job_name}&price=${job.price}&content=${job.content}&persons=${job.persons}&c_name=${job.c_name}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true},job).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
    console.log('loginStudentApi suc ' + job)
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 删除职位
export function delCompanyJobApi (id, cb) {
  const baseUrl = config.rootUrl + `company/job_del.php?id=${id}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 获取修改职位信息
export function fetchCompanyJobApi (id, cb) {
  const baseUrl = config.rootUrl + `company/job_details.php?id=${id}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true}).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}

// 修改职位信息
export function updateCompanyJobApi (job, cb) {
  const baseUrl = config.rootUrl + `company/job_update.php?id=${job.id}&price=${job.price}&content=${job.content}&persons=${job.persons}`
  return Vue.http.post(baseUrl,{headers:'X-Requested-With:XMLHttpRequest'},{emulateJSON:true},job).then((res) => {
    cb(res.body)
    console.log('loginStudentApi suc ' + JSON.stringify(res))
  }, (err) => {
    console.log('loginStudentApi err ' + JSON.stringify(err))
    cb(null, err)
  })
}
