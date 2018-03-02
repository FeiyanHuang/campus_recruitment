<template>
  <div  class="col-md-8 col-md-offset-2 big-box" >
    <div class="col-md-12 panel panel-default">
      <div class="panel-body" >
        <div class="from-box">
          <form action="" @submit.prevent='createMode?add():update()'>
            <div class="col-md-6 item-box">
              <label class="font">职位名</label>
              <br>
              <input v-if="createMode" class="form-control input-box" name="text" type="text" placeholder="必填" v-model="job.job_name">
              <input v-if="!createMode" class="form-control input-box" name="text" type="text" placeholder="必填" v-model="job.job_name" disabled>
            </div>
            <div class="col-md-6 item-box">
              <label class="font">薪资</label>
              <br>
              <input class="form-control input-box" type="text" name="" value="" v-model="job.price" required placeholder="必填">
            </div>
            <div class="col-md-6 item-box">
              <label class="font">人数</label>
              <br>
              <input class="form-control input-box" type="text" name="" value="" v-model="job.persons" placeholder="必填">
            </div>
            <div class="col-md-6 item-box">
              <label class="font">要求</label>
              <br>
              <input placeholder="必填" v-model="job.content" class="form-control input-box" name="phone" type="text" >
            </div>
            <div class="col-md-12 btn-box">
              <div class="">
                <button class="btn btn-primary center" type="submit" name="button">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src = './AddJob.js' scoped> </script>
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
</style>
