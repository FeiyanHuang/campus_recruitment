<template>
  <div class="big-box" >
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">校园招聘</a>
        </div>
        <ul class="nav navbar-nav">
          <li @click="job_list()"><a href="#">职位管理</a></li>
          <li @click="company_list()"  class="active"><a href="#">企业管理</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> -->
          <li  @click='logout'><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container main-box">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>编号</th>
            <th>公司名</th>
            <th>密码</th>
            <th>负责人</th>
            <th>联系电话</th>
            <th>联系邮箱</th>
            <th>地址</th>
            <th>公司类型</th>
            <th>简介</th>
            <th>禁用</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companys">
            <td>{{ company.id }}</td>
            <td>{{ company.company_name }}</td>
            <td>{{ company.password }}</td>
            <td>{{ company.boss }}</td>
            <td>{{ company.tel }}</td>
            <td>{{ company.email }}</td>
            <td>{{ company.address }}</td>
            <td>{{ company.type }}</td>
            <td>{{ company.content }}</td>
            <td>
              <button  :class="{ 'btn-default':true,'btn-danger': company.disable==0, 'btn-success': company.disable==1 }" @click="toggle(company.id,company.disable)"> {{ company.disable==1 ? '启用' : '禁用' }} </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src = './CompanyList.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  table>thead>tr>th
    text-align: center
    font-family: '黑体'
  table>tbody>tr>td
    font-size: 12px
    vertical-align: middle!important
    text-align: center
    font-family: '黑体'
  .main-box
    margin-top: 80px
</style>
