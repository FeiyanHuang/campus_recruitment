<template>
  <div class="big-box" >
    <div class="container" >
      <!-- <form method="post" action="http://localhost:88/campus_recruitment/chklogin.php"> -->
      <form @submit.prevent='login'>
        <div class="col-md-6 col-md-offset-3 login-box">
          <div class="title">
            <span class="company">{{this.title}}</span>
          </div>
          <div class="col-md-10 col-md-offset-1 main-box">
            <div class="user-box">
              <label class="font">企业名称</label>
              <input class="form-control input-box" type="text" placeholder="" name="company_name" value="" v-model="company_name" required>
            </div>
            <div class="password-box">
              <label class="font">密码</label>
              <br>
              <input class="form-control input-box" type="password" placeholder="" name="password" value="" v-model="password" required>
            </div>
            <div class="forget-box">
              <popper trigger="hover" :options="{placement: 'top'}">
                <div class="popper">
                  {{ forgetPwd }}
                </div>
                <div class="" slot="reference">
                  <span class="forget">忘记密码</span><i class="fa fa-question-circle-o forget-icon"></i>
                </div>
              </popper>
            </div>
            <button class="btn btn-block login-btn" type="submit" name="button">提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script src = './Login.js' scoped> </script>
<style lang="sass" scoped>
  @import "../../assets/scss/app"
  .login-box
    margin-top: 80px
    border: 1px solid #d8dde6
    height: 650px
    background-color: #fff
    margin-bottom: 60px
    border-radius: 5px
    box-shadow: 0px 0px 10px #d8dde6
    padding-top: 80px
    padding-bottom: 100px
  .title
    text-align: center
  .company
    font-size: 36px
    color: #3385ff
    font-family: '黑体'
  // .main-box
  //   margin-top: 50px
  .font
    font-size: 16px
    font-weight: normal
    color: #3385ff
    font-family: '黑体'
  .input-box
    height: 62px
    border-radius: 2px
  .login-btn
    font-size: 18px
    color: #eee
    height: 62px
    background-color: #3385ff
    border-color: #d8dde6
    border-radius: 5px
    font-family: '黑体'
  .login-btn:hover
    color: #0070d2
    background-color: #eee
  .password-box, .user-box
    margin-bottom: 60px
  .big-box
    background-color: #f4f6f9
  .problem
    display: inline-block
  .problem-icon
    color: rgba(71,113,248,0.8)
    font-size: 16px
    cursor: pointer
  .forget
    font-family: '黑体'
    font-size: 12px
    font-weight: normal
    color: #3385ff
    cursor: pointer
  .forget-icon
    font-size: 12px
    color: #3385ff
  .forget-box
    display: inline-block
    margin-bottom: 10px
    float: right
  .is-danger
    border: 1px solid #f00
  .font-danger
    color: #f00

  // 一种自适应的办法
  // @media screen and (min-width: 1024px)
  //   /*pc
  //   .login-box
  //     margin-top: 60px
  // @media screen and (max-width: 1024px)
  //   /*手机
  //   .login-box
  //     margin-top: 50%
</style>
