<template>
  <el-table
      :data="tableData"
      style="width: 100%">
<!--    <el-table-column-->
<!--        type="index"-->
<!--        :index="indexMethod">-->
<!--    </el-table-column>-->
    <el-table-column
        prop="ip"
        label="地址"
        width="180">
    </el-table-column>
    <el-table-column
        prop="count"
        label="数据"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneApi",
  data() {
    return {
      tableData: [],
      search: ''
    }
  }, methods: {
    indexMethod(index) {
      return index * 2;
    },
    searchOneApi(){
      this.$axios({
        method:'get',
        headers: {'Authorization': "Bearer "+localStorage.getItem("token")},
        url:'http://127.0.0.1:8080/Count/Api/'+this.$route.params.url,
      }).then(response=>{
        this.tableData=response.data.data
      })
    },
  },
  created() {
    this.searchOneApi()
  }
}
</script>

<style scoped>

</style>
