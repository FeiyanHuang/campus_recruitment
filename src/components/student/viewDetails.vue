<template>
  <div class="big-box" >
    <!-- banner -->
    <div class="banner">
    </div>
    <!-- 首页 -->
    <div class="container main-box">
      <div v-if="this.check" class="col-md-12 btn-box">
        <button type="button" name="button" class="btn btn-success btn-lg" @click="pass(job.id)">通过</button>
        <button type="button" name="button" class="btn btn-danger btn-lg" @click="failed(job.id)">不通过</button>
      </div>
      <div class="col-md-8">
        <!-- 职位简介 -->
        <div class="job">
          <!-- <div class="image">
            <img src="../../assets/img/company.png" alt="">
          </div> -->
          <h2>{{job.job_name}}</h2>
          <div class="">
            <h4><span>薪资：</span>{{job.price}}元/月</h4>
            <h4><span>学历/工作地点：</span>{{job.education}}/{{job.j_address}}</h4>
            <h4><span>招聘人数：</span>{{job.persons}}人</h4>
          </div>
          <p><span>工作要求：</span><br>{{job.j_content}}</p>
          <h4 class="date">{{job.date_time}} 发布</h4>
        </div>
        <!-- 公司简介 -->
        <div class="company">
          <!-- <div class="image">
            <img src="../../assets/img/job.png" alt="">
          </div> -->
          <h2>{{job.company_name}}</h2>
          <div class="">
            <h4><span>企业法人：</span>{{job.boss}}</h4>
            <h4><span>企业类型：</span>{{job.type}}</h4>
            <h4><span>联系电话：</span>{{job.tel}}</h4>
            <h4><span>联系邮箱：</span>{{job.email}}</h4>
            <h4><span>企业地址：</span>{{job.address}}</h4>
          </div>
          <p><span>公司概况：</span><br>{{job.c_content}}</p>
        </div>
      </div>
      <div class="col-md-4 advertisement3">
        <img src="../../assets/img/advertisement3.png" alt="">
      </div>
    </div>
  </div>
</template>
<script src = './viewDetails.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .banner
    height: 300px
    margin-top: -20px
    background: url(../../assets/img/banner2.png)
  .main-box
    position: relative
    top: -140px
    background-color: rgba(255,255,255,0.8)
    padding-bottom: 40px
    border: 1px solid #efefef
  .advertisement3
    position: relative
    left: 60px
  // .company>.image,.job>.image,.company>h2,.job>h2
  //   display: inline-block
  // .company>.image
  //   padding: 10px
  //   border: 4px solid #257FD2
  //   border-radius: 4px
  //   margin-right: 60px
  //   background-color: rgba(37,127,210,0.5)
  //   margin-bottom: 40px
  // .job>.image
  //   padding: 10px
  //   border: 4px solid #FE5A00
  //   border-radius: 4px
  //   margin-right: 60px
  //   background-color: rgba(254,90,0,0.5)
  //   margin-bottom: 30px
  // .job>div>h4,.company>div>h4
  //   display: inline-block
  //   margin-right: 30px
  .job>div>h4>span,.company>div>h4>span
    margin-right: 20px
    font-weight: bold
  .job>p,.company>p
    margin-top: 20px
    font-size: 20px
  .job>p>span,.company>p>span
    font-weight: bold
  .date
    float: right
  .company
    margin-top: 120px
  .btn-box
    margin-bottom: 40px
  // .right
  //   float: right
  // .main-box
  //   margin-top: 80px
</style>
