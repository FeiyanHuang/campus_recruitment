<template>
  <div  class="col-md-8 col-md-offset-2 big-box" >
    <div class="btn-box">
      <button type="button" name="button" class="btn btn-success" @click="pass(job.id)">通过</button>
      <button type="button" name="button" class="btn btn-danger" @click="failed(job.id)">不通过</button>
    </div>
    <div class="col-md-12 panel panel-default">
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
    </div>
  </div>
</template>
<script src = './JobCheck.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .form-box
    border-radius: 24px
    font-size: 12px
    color: #333
    font-weight: lighter
    font-family: '黑体'
  .input-box
    border-radius: 6px
  .admin-smallbox
    border: 1px solid #fff
    border-radius: 6px
    text-align: center
    padding: 2px 0
  .item-box
    height: 80px
    margin-bottom: 30px
  .item-box>label
    font-size: 12px
    color: #333
  .admin-smallbox
    border: 1px solid #ccc
  .is-danger
    border: 1px solid #f00
  .font-danger
    color: #f00
  .btn-box
    margin-bottom: 20px
  .big-box
    margin-top: 50px
  .panel-body
    margin-top: 50px
  .radio-font
    margin-right: 30px
    margin-left: 5px
  .btn-box
    float: right
</style>
