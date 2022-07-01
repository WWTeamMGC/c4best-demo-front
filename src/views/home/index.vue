<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <!--        主页面左上角-->
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间<span>2022-06-27</span></p>
          <p>上次登录地点<span>辽宁</span></p>
        </div>
      </el-card>
      <!--      主页的作品下角-->
      <el-card style="margin-top: 20px;height: 460px">
        <el-table :data="tableData">
<!--          <el-table-column
              v-for="(val,key) in tableabel"
              :key="key"
              :prop="key"
              :label="val"
          >

          </el-table-column>-->
          <el-table-column
              label="IP"
              prop="ip">
          </el-table-column>
          <el-table-column
              label="PC/MP"
              prop="pc_mp">
          </el-table-column>
          <el-table-column
              label="Address"
              prop="address">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!--    主页右上角的布局-->
    <el-col style="margin-top: 20px" :span="16">
      <div class="num">
      </div>
<!--      折线图的位置-->
      <el-card style="height: 400px">
        <seller></seller>
      </el-card>
      <div class="graph">
<!--        柱状图-->
        <el-card style="height: 360px"></el-card>
<!--        饼状图-->
        <el-card style=" height: 360px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import seller from "@/components/seller";
export default {
  name: 'home',
  components:{
    seller:seller
  },
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [
        /*{
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }*/
      ],
      tableabel: {
        ip: '异常IP',
        pc_mp: 'PC/MP',
        address: '属地',
        /*totalBuy: '总购买'*/
      },
      chartInstance:null,
      allData:null //服务器返回的数据
    }
  },
  created() {
    this.tableData = this.allData
    this.$axios({
      method:'post',
      url:'',
    }).then(response=>{
      this.tableData = response.data
    })
  }

}
</script>

<style scoped>

</style>
