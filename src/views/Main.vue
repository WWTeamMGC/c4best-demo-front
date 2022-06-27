<template>

  <el-container style="height:100% ">
    <el-aside width="auto">
<!--      页面的侧边栏-->
      <Commonaside></Commonaside>
    </el-aside>
    <el-container>
      <el-header>
<!--        页面的头文件-->
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
<!--        路由显示的部分即头文件下方-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
import Commonaside from '../components/Commonaside'
import CommonHeader from "@/components/CommonHeader";
export default {
  name: 'Home',
  components:{
    Commonaside,
    CommonHeader
  },
  data(){
    return{}
  }
}
</script>
<style lang="less" scoped>
.el-header{
  background-color:#333333;
}
.el-main{
  padding-top: 0;

}
</style>