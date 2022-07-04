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
        prop="ncount"
        label="访问次数"
        width="700">
    </el-table-column>>
    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
        <router-link to="/oneApipage">查看</router-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneApicount",
  data(){
    return{
      tableData:[{}],
      search: ''
    }
  },
  methods:{
    searchOneApiCount(){
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:8080:/BadApi/Ip',
      }).then(response=>{
        this.tableData=response.data.badiplist
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
