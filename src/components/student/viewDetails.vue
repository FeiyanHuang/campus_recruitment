<template>
  <div class="big-box" >
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">校园招聘</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li  @click='logout'><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container main-box">
{{job.address}}<br>
{{job.job_name}}<br>
{{job.price}}<br>
{{job.c_content}}<br>
{{job.j_content}}<br>
{{job.persons}}<br>
{{job.status}}<br>
{{job.company_name}}<br>
{{job.password}}<br>
{{job.boss}}<br>
{{job.tel}}<br>
{{job.email}}<br>
{{job.type}}<br>
{{job.disable}}
    </div>
  </div>
</template>
<script src = './viewDetails.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .right
    float: right
  .main-box
    margin-top: 80px
</style>
