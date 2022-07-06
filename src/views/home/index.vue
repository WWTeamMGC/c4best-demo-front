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
      <el-card style="height: 770px">
        <seller></seller>
      </el-card>
      <div class="graph">
<!--&lt;!&ndash;        柱状图&ndash;&gt;-->
<!--        <el-card style="height: 360px"></el-card>-->
<!--&lt;!&ndash;        饼状图&ndash;&gt;-->
<!--        <el-card style=" height: 360px"></el-card>-->
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
      tableData: [{}],
      chartInstance:null,
      allData:null //服务器返回的数据
    }
  },
  created() {
    this.searchBadMan()
  },
  methods:{
    searchBadMan(){
      this.$axios({
        method: 'post',
        headers: {'Authorization': "Bearer "+localStorage.getItem("token")},
        url: 'http://127.0.0.1:8080/BadApi/Ip'
      }).then(response => {
        this.tableData=response.data.badiplist
      })
    },
  }

}
</script>

<style scoped>

</style>
