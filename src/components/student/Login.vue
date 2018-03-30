<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3 login-box" ref="center">
      <div class="title">
        {{title}}
      </div>
      <!-- <form method="post" action="http://localhost:88/campus_recruitment/chklogin.php"> -->
      <form class="" action="index.html" @submit.prevent='login'>
        <div class="col-md-10 col-md-offset-1 user">
          <label for="">学号</label>
          <input type="text" class="form-control" v-model="student_id">
        </div>
        <div class="col-md-10 col-md-offset-1 password">
          <label for="">密码</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="col-md-10 col-md-offset-1">
          <button type="submit" class="btn btn-block" name="button">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script src = './Login.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .login-box
     border: 1px solid #257FD2
     border-radius: 6px
     box-shadow: 0px 0px 10px #257FD2
     padding-top: 10px
     padding-bottom: 10px
  .title
    text-align: center
    font-size: 40px
    color: #257FD2
    font-family: '华文行楷'
  form>div
    margin-top: 20px
    margin-bottom: 20px
  form>div>label,form>div>button
    font-size: 16px
    font-weight: normal
    font-family: '黑体'
  form>div>input
    border-radius: 4px !important
  form>div>button
    height: 40px
    background-color: #257FD2
    color: #fff!important
    border-radius: 4px!important
  form>div>button:hover
    border-color: #257FD2!important
    background-color: #fff
    color: #257FD2!important
</style>
