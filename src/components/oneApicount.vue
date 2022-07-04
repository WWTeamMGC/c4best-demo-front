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
        <router-link to="/oneApi">查看</router-link>
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
  methods:{}

}
</script>

<style scoped>
#demo2{
    margin-top: 20px;

}
</style>