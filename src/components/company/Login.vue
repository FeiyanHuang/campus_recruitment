<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3 login-box" ref="center">
      <div class="title">
        {{title}}
      </div>
      <!-- <form method="post" action="http://localhost:88/campus_recruitment/chklogin.php"> -->
      <form class="" action="index.html" @submit.prevent='login'>
        <div class="col-md-10 col-md-offset-1 user">
          <label for="">企业名称</label>
          <input type="text" class="form-control" v-model="company_name">
        </div>
        <div class="col-md-10 col-md-offset-1 password">
          <label for="">密码</label>
          <div class="problem">
            <popper trigger="hover" :options="{placement: 'top'}">
              <div class="popper">
                忘记密码，联系管理员QQ：515978951
              </div>
              <div class="" slot="reference">
                <i class="fa fa-question-circle-o problem-icon"></i>
              </div>
            </popper>
          </div>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="col-md-10 col-md-offset-1">
          <button type="submit" class="btn btn-block" name="button">登录</button>
          <span class="center"><router-link :to="{ path: '/company/register/0' }">注册</router-link></span>
        </div>
      </form>
    </div>
  </div>
</template>
<script src = './Login.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .login-box
     border: 1px solid #FE5A00
     border-radius: 6px
     box-shadow: 0px 0px 10px #FE5A00
     padding-top: 10px
     padding-bottom: 10px
  .title
    text-align: center
    font-size: 40px
    color: #FE5A00
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
    background-color: #FE5A00
    color: #fff!important
    border-radius: 4px!important
  form>div>button:hover
    border-color: #FE5A00!important
    background-color: #fff
    color: #FE5A00!important
  .center
    text-align: center
  .problem
    display: inline-block
</style>
