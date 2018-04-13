<template>
  <div  class="col-md-8 col-md-offset-2 big-box" >

    <div class="job">
      <div class="image">
        <img src="../../assets/img/company.png" alt="">
      </div>
      <h2>{{job.job_name}}</h2>
      <div class="">
        <h4><span>薪资：</span>{{job.price}}元/月</h4>
        <h4><span>学历/工作地点：</span>{{job.education}}/{{job.j_address}}</h4>
        <h4><span>招聘人数：</span>{{job.persons}}人</h4>
      </div>
      <p><span>工作要求：</span><br>{{job.j_content}}</p>
      <h4 class="date">{{job.date_time}} 发布</h4>
    </div>
    <!-- <div class="col-md-12 panel panel-default">
      <div class="panel-body" >
        <div class="from-box">
            <div class="col-md-6 item-box">
              <label class="font">职位:</label>
              <br>
              {{ job.job_name }}
            </div>
            <div class="col-md-6 item-box">
              <label class="font">薪资:</label>
              <br>
              {{ job.price }}
            </div>
            <div class="col-md-6 item-box">
              <label class="font">人数:</label>
              <br>
              {{ job.persons }}
            </div>
            <div class="col-md-6 item-box">
              <label class="font">公司:</label>
              <br>
              {{ job.c_name }}
            </div>
            <div class="col-md-6 item-box">
              <label class="font">要求:</label>
              <br>
              {{ job.content }}
            </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script src = './JobCheck.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .company>.image,.job>.image,.company>h2,.job>h2
    display: inline-block
  .company>.image
    padding: 10px
    border: 4px solid #257FD2
    border-radius: 4px
    margin-right: 60px
    background-color: rgba(37,127,210,0.5)
    margin-bottom: 40px
  .job>.image
    padding: 10px
    border: 4px solid #FE5A00
    border-radius: 4px
    margin-right: 60px
    background-color: rgba(254,90,0,0.5)
    margin-bottom: 30px
  .job>div>h4,.company>div>h4
    display: inline-block
    margin-right: 30px
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
  // .form-box
  //   border-radius: 24px
  //   font-size: 12px
  //   color: #333
  //   font-weight: lighter
  //   font-family: '黑体'
  // .input-box
  //   border-radius: 6px
  // .admin-smallbox
  //   border: 1px solid #fff
  //   border-radius: 6px
  //   text-align: center
  //   padding: 2px 0
  // .item-box
  //   height: 80px
  //   margin-bottom: 30px
  // .item-box>label
  //   font-size: 12px
  //   color: #333
  // .admin-smallbox
  //   border: 1px solid #ccc
  // .is-danger
  //   border: 1px solid #f00
  // .font-danger
  //   color: #f00
  // .btn-box
  //   margin-bottom: 20px
  // .big-box
  //   margin-top: 50px
  // .panel-body
  //   margin-top: 50px
  // .radio-font
  //   margin-right: 30px
  //   margin-left: 5px
  // .btn-box
  //   float: right
</style>
