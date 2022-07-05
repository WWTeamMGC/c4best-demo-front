<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="url"
        label="地址"
        width="700">
    </el-table-column>
    <el-table-column
        prop="count"
        label="访问次数"
        width="700">
    </el-table-column>>
    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
<!--        <router-link to="/oneApi">-->
<!--&lt;!&ndash;          <el-button type="primary" round>查看</el-button>&ndash;&gt;-->
<!--          <el-button @click="goSearch(scope.$index, scope.row) "type="primary" round >查看</el-button>-->
<!--        </router-link>-->
        <el-button @click="goSearch(scope.$index, scope.row) "type="primary" round >查看</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneApicount",
  data(){
    return{
      tableData:[],
      search: ''
    }
  },
  methods:{
    goSearch(index,row){
      // 字符串传参,params方式：不带问号，地址栏占位。

      this.$router.push('/oneApi/' + row.url.substring(1,))
    }
    ,
    searchOneApiCount(){
      this.$axios({
        method:'get',
        headers: {'Authorization': "Bearer "+localStorage.getItem("token")},
        url:'http://127.0.0.1:8080/Count/ApiDetail',
      }).then(response=>{
        this.tableData=response.data.data
      })
    }
  },
  created() {
    this.searchOneApiCount()
  }

}
</script>

<style scoped>
#demo2{
    margin-top: 20px;

}
</style>
