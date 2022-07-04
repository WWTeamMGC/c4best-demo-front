<template>
<!--  <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        width="300">
    </el-table-column>

    <el-table-column
        fixed="right"
        label="操作"
        width="150">
      <template slot-scope="scope">
        <el-button @click=""></el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>

<!--        <el-button type="text" size="small">编辑</el-button>-->
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  name: "badword",
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  created() {
    this.$axios({
      method: 'post',
      url: ''
    }).then(response => {
      this.tableData = response.data
    })
  }
}
</script>

<style scoped>

</style>
