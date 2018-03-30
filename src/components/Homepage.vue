<template>
  <div class="big-box" >
    <!-- 导航 -->
    <nav v-if="!currentUser" class="navbar navbar-inverse">
      <div class="container container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">校园招聘</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li ><router-link :to="{ path: '/company/login' }">企业</router-link></li>
          <li ><router-link :to="{ path: '/student/login' }">学生</router-link></li>

          <!-- <span @click='admin_login'>admin</span> -->
          <!-- <span @click='company_login'>company</span>
          <span @click='student_login'>student</span> -->
        </ul>
      </div>
    </nav>
    <!-- banner -->
    <div class="banner">
    </div>
    <!--中间部分  -->
    <div class="">
      <!-- 查找职位 -->
      <div class="container search">
        <div class="col-md-3">
          <p>搜寻你想要的工作</p>
        </div>
        <div class="col-md-3">
          <input class="form-control" type="text" name="" value="" placeholder="公司">
        </div>
        <div class="col-md-3">
          <input class="form-control" type="text" name="" value="" placeholder="职位">
        </div>
        <div class="col-md-3">
          <button class="btn" type="button" name="button">找工作</button>
        </div>
      </div>
      <!--  adv盒子  -->
      <div class="container advertisement">
        <div class="col-md-8 col-md-offset-2">
          <div class="col-md-6">
            <img src="../assets/img/advertisement1.png" alt="">
          </div>
          <div class="col-md-6">
            <img src="../assets/img/advertisement2.png" alt="">
          </div>
        </div>
      </div>
      <!-- 问题，职位盒子 -->
      <div class="container">
        <!-- 问题 -->
        <div class="col-md-3">
          <!-- FQA -->
          <div class="col-md-12 FQA">
            <h3>常见问题</h3>
            <p>1、忘记了用户名/密码，要怎样找回？</p>
            <p>2、校园招聘面对的对象是哪类学生？</p>
            <p>3、招聘网职位信息来源是否可靠？ </p>
          </div>
          <!-- HAVE ANY QUESTIONS -->
          <div class="col-md-12 questions">
            <h3>其他问题</h3>
            <p>如果你还有其他问题请拨打以下电话</p>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>17858952904</span>
          </div>
        </div>
        <!-- 职位 -->
        <div class="col-md-6 job">
          <p>POST A JOB OFFER</p>
          <p>{{jobs}}</p>
        </div>
        <!-- adv2 -->
        <div class="col-md-3 adv2">
          <div class="col-md-10 col-md-offset-1 CATEGORY">
            <p class="">CATEGORY</p>
          </div>
          <div class="col-md-10 col-md-offset-1 WORKINGTIME">
            <p class="">CATEGORY</p>
          </div>
        </div>
      </div>
      <!-- 关于我们 -->
      <div class="col-md-12 about_me">
        <h2>关于我们</h2>
        <div class="container">
          <div class="col-md-6">
            <div class="">
              <img class="square" src="../assets/img/square.png" alt="">
              <img class="square_small" src="../assets/img/square_small.png" alt="">
            </div>
            <div >
              <h3 class="blue">安全保护</h3>
              <p>提供经过审核的可靠职位</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="">
              <img class="square" src="../assets/img/square.png" alt="">
              <img class="square_small" src="../assets/img/square_small.png" alt="">
            </div>
            <div >
              <h3 class="blue">海量信息</h3>
              <p>多家公司随时发布职位信息</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 数字 -->
      <div class="container number">
        <div class="col-md-3 number_item origin">
          <h3>182 000<span>个岗位</span></h3>
          <p>本网站提供多个安全可靠的职位</p>
        </div>
        <div class="col-md-3 number_item blue">
          <h3>7500<span>家公司</span></h3>
          <p>本网站与众多公司有合作关系</p>
        </div>
        <div class="col-md-3 number_item origin">
          <h3>15500<span>个用户</span></h3>
          <p>本网站有庞大的客户群</p>
        </div>
        <div class="col-md-3 number_item blue">
          <h3>2500<span>个种类</span></h3>
          <p>本网站提供工作种类繁多</p>
        </div>
        <div class="btn-box">
          <button class="btn btn-default"  type="button" name="button">了解详情</button>
        </div>
      </div>
      <!--blue bg-->
      <div class="blue_background">

      </div>
      <!-- map -->
      <div class="">
        <iframe src="http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3461.6504402499063!2d121.56091831497861!3d29.8166416362531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d7c67389928e7%3A0xe27bc73ae95e5540!2z5rWZ5rGf5LiH6YeM5a2m6Zmi6ZKx5rmW5qCh5Yy6!5e0!3m2!1szh-CN!2scn!4v1522397206338" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
<script src = './Homepage.js' scoped> </script>
<style lang="sass" scoped>
  @import "../assets/scss/app"
  .navbar-inverse
    background-color: #FE5A00
    border: 0px solid #090909
  .banner
    margin-top: -20px
    height: 300px
    background: url(../assets/img/banner.png)
  .search
    height: 80px
    padding-top: 25px
    text-align: center
    background-color: #FE5A00
  .search>div>p
    color: #eee
    padding-top: 6px
  .search>div>input
    border-radius: 2px
  .search>div>button
    background-color: #FE5A00
    color: #eee
    border: 1px solid #eee
    padding-left: 30px
    padding-right: 30px
  .search>div>button:hover
    background-color: #eee
    color: #FE5A00
    border: 1px solid #FE5A00
  .advertisement
    padding-top: 20px
  .FQA,.questions
    padding: 0 30px 20px 30px
  .FQA>p
    border-bottom: 1px dashed #eee
    padding-bottom: 20px
    padding-top: 20px
  .FQA,.CATEGORY
    background-color: #257FD2
    border-radius: 4px
    color: #EEF5FB
    margin-top: 20px
    display: inline-block
  .questions,.WORKINGTIME
    display: inline-block
    background-color: #FE5A00
    border-radius: 4px
    color: #EEF5FB
    margin-top: 10px
  .fa-phone
    font-size: 60px
  .questions>p
    padding: 20px 0px 20px 0px
  .questions>span
    font-size: 22px
    float: right
  .job
    margin-top: 20px
  .about_me
    background-color: #efefef
    padding-bottom: 40px
    padding-top: 40px
    margin-top: 20px
    margin-bottom: 20px
  .about_me>h2
    text-align: center
    color: #FE5A00
    padding: 20px 0 20px 0
  .about_me>div
    position: relative
    left: 120px
  .about_me>div>div>div
    display: inline-block
  .about_me>div>div>div>.blue
    text-align: center
    line-height: 40px
  .square_small
    position: relative
    right: 30px
  .number_item
    border-right: 1px solid #999
    text-align: center
    padding-bottom: 20px
    padding-top: 40px
    margin-bottom: 40px
  .number_item>h3>span
    font-size: 16px
    opacity: 0.6
  .origin
    color: #FE5A00
  .blue
    color: #257FD2
  .number_item>p
    color: #999
  .btn-box
    text-align: center
  .blue_background
    margin-top: 20px
    height: 400px
    background: url(../assets/img/blue_background.png) center top
</style>
