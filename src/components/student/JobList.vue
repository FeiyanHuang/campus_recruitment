<template>
  <div class="big-box" >
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">校园招聘</a>
        </div>
        <form class="nav navbar-nav navbar-form" @submit.prevent='find(search)'>
          <div class="input-group">
            <input type="text" class="form-control" v-model='search' placeholder="Search">
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li  @click='logout'><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container main-box">
      <div class="panel panel-default panel-box" v-for="job in jobs">
        <div class="panel-heading">
          <span>{{job.job_name}}</span>
          <span class="right" @click="view(job.id)">{{job.c_name}}</span>
        </div>
        <div class="panel-body">
          <p>{{job.content}}</p>
        </div>
        <div class="panel-footer">
          <span>{{job.price}}</span>
          <span class="right">{{job.persons}}</span>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="center">
      <pagination :records='total_records' :per-page="10" @paginate="setPage"></pagination>
    </div>
  </div>
</template>
<script src = './JobList.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .right
    float: right
  .main-box
    margin-top: 80px
</style>
