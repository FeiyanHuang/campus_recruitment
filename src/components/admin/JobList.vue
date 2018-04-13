<template>
  <div class="container" >
    <div class="">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>编号</th>
            <th>职位名</th>
            <th>公司名</th>
            <th>薪资</th>
            <th>人数</th>
            <!-- <th>简介</th> -->
            <th>学历</th>
            <th>工作地址</th>
            <th>发布时间</th>
            <th>状态</th>
            <th>审核</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs">
            <td>{{ job.id }}</td>
            <td>{{ job.job_name }}</td>
            <td>{{ job.c_name }}</td>
            <td>{{ job.price }}</td>
            <td>{{ job.persons }}</td>
            <td>{{ job.education }}</td>
            <td>{{ job.j_address }}</td>
            <td>{{ job.date_time }}</td>
            <!-- <td>{{ job.content }}</td> -->
            <td>
              <span v-if="job.status=='1'">通过</span>
              <span v-else-if="job.status=='0'">未通过</span>
              <span v-else>等待审核</span>
            </td>
            <td>
              <button type="button" name="button" @click="check(job.id)">查看/审核</button>
            </td>
          </tr>
        </tbody>
      </table>
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
  table>thead>tr>th
    text-align: center
    font-family: '黑体'
  table>tbody>tr>td
    font-size: 12px
    vertical-align: middle!important
    text-align: center
    font-family: '黑体'
  .main-box
    margin-top: 80px
</style>
