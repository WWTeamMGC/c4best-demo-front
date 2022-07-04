<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        type="index"
        :index="indexMethod">
    </el-table-column>
    <el-table-column
        prop="url"
        label="地址"
        width="180">
    </el-table-column>
    <el-table-column
        prop="data"
        label="数据"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneIp",
  data() {
    return {
      tableData: [{
        url:'123456',
        data:'1270.0.0.'
      }],
      search: ''
    }
  }, methods: {
    indexMethod(index) {
      return index * 2;
    }
  }
}
</script>

<style scoped>

</style>