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
          <el-table-column
              v-for="(val,key) in tableabel"
              :key="key"
              :prop="key"
              :label="val"
          >

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!--    主页右上角的布局-->
    <el-col style="margin-top: 20px" :span="16">
      <div class="num">
<!--        六块方格-->
        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt"></p>
          </div>
        </el-card>
      </div>
<!--      折线图的位置-->
      <el-card style="height: 280px">

      </el-card>
      <div class="graph">
<!--        柱状图-->
        <el-card style="height: 260px"></el-card>
<!--        饼状图-->
        <el-card style=" height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getMenu} from '../../../api/data'
export default {
  name: 'home',
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [
        {
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
        }
      ],
      tableabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      chartInstance:null,
      allData:null //服务器返回的数据
    }
  },

}
</script>

<style scoped>

</style>