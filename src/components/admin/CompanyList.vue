<template>
  <div class="big-box" >
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
            <th>已有职位</th>
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
            <td>
              <button type="button" name="button" @click="view(company.company_name)">查看</button>
            </td>
            <td><span @click="viewContent(company.content)">查看</span></td>
            <td>
              <button  :class="{ 'btn-default':true,'btn-danger': company.disable==0, 'btn-success': company.disable==1 }" @click="toggle(company.id,company.disable)"> {{ company.disable==1 ? '启用' : '禁用' }} </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分页 -->
    <div class="center">
      <pagination :records='total_records' :per-page="10" @paginate="setPage"></pagination>
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
</style>
