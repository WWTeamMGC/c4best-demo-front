<template>
  <el-table
      :data="tableData"
      style="width: 100%">
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
    <el-table-column
        align="right">
<!--      <template slot="header" slot-scope="scope">
        <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
      </template>-->
      <template slot-scope="scope">
<!--        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">移除</el-button>
<!--        <div>{{scope.row}}</div>-->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "badman",
  data() {
    return {
      tableData:[],
      //虚拟数据
      // tableData: [{
      //   ip: '2016-05-02',
      //   pc_mp: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   ip: '2016-05-04',
      //   pc_mp: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   ip: '2016-05-01',
      //   pc_mp: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }, {
      //   ip: '2016-05-03',
      //   pc_mp: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄'
      // }],
      search: ''
    }
  },
  methods: {
    handleDelete(index, row) {
      /*console.log(index, row);*/
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:8080:/BadApi/Ip',
        data:row
      }).then(response=>{
        //删除成功
        if (response.data == 1){
          this.searchBadMan()
        }else {
          alert("系统繁忙，请稍后重试.....")
        }
      })
    },
    /*
    handleEdit(index, row) {
      console.log(index, row);
    },
    */
    searchBadMan(){
      this.$axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/BadApi/Ip'
      }).then(response => {
       this.tableData=response.data.badiplist
      })
    }
  },
  created() {
    this.searchBadMan()
  }
}
</script>

<style scoped>

</style>


