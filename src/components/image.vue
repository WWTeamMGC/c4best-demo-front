<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%"> 
    <el-table-column
        fixed
        prop="date"
        label="图片"
        width="1500px"
        height="1000px"
    >
      <img src="image/小叮当.jpg" >
    </el-table-column>

    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="big">查看</el-button>
        <el-button @click="" type="text" size="big">驳回</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>

export default {
  name: "image",
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      tableData: [{
        data: ''
      }]
    }
  }
}
</script>

<style scoped>

</style>