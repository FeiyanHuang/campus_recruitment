<template>
  <div class="big-box" >
    <div class="container main-box">
      <div class="col-md-8">
        <!-- 职位列表 -->
        <div class="job" v-for="(job,index) in jobs" >
          <h4>{{job.job_name}}</h4>
          <div class="">
            <span class="">{{job.price}}元/月</span>
            <span class="middle">{{job.education}}/{{job.j_address}}</span>
            <span class="right">{{job.persons}}人</span>
            <br>
            <span class="">{{job.date_time}} 发布</span>
            <span class="middle2" >{{job.c_name}}</span>
            <span class="right detail" @click="view(job.id)">查看详情>></span>
          </div>
        </div>
        <!-- 分页 -->
        <div class="center">
          <pagination :records='total_records' :per-page="10" @paginate="setPage"></pagination>
        </div>
      </div>
      <!-- 广告 -->
      <div class="col-md-4">
        <img src="../assets/img/advertisement3.png" alt="">
      </div>
    </div>
  </div>
</template>
<script src = './JobList.js' scoped> </script>
<style lang="sass" scoped>
  @import "../assets/scss/app"
  .search
    height: 300px
    text-align: center
    background: url(../assets/img/banner3.png) center
    margin-top: -20px
    padding-top: 120px
  .job
    border: 1px solid #FE5A00
    padding: 20px 30px 20px 30px
    margin-bottom: 40px
  .job>h4
    color: #257FD2
    display: inline-block
  .job>div
    height: 60px
    padding-top: 10px
    line-height: 40px
    margin-bottom: 20px
  .job>div>span
    font-size: 16px
  .right
    float: right
  .middle
    position: relative
    left: 35%
  .middle2
    position: relative
    left: 25%
  .detail
    cursor: pointer
  .detail:hover
    color: #666
</style>
