<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">

    <el-table-column
        prop="badwords"
        label="敏感词"
        width="120">
    </el-table-column>
    <el-table-column
        prop="delete"
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
      tableData: [],
      // [{

      //   date: '2016-05-02',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1517 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1519 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1516 弄',
      //   zip: 200333
      // }]
    }
  },
  created() {
    this.$axios({
      method: 'post',
      url: 'http://127.0.0.1:8080/BadApi/Words'
    }).then(response => {
      this.tableData = response.data.badwordslist
    })
  }
}
</script>

<style scoped>

</style>
