<template>
<div>
  <el-button id="add" type="text"icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true" style="" size="big">添加</el-button>
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

      <template slot-scope="scope">
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">移除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="IP" :label-width="formLabelWidth">
        <el-input v-model="form.ip" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>




</div>
</template>

<script>
export default {
  name: "badman",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        ip:'',
        pcmp:'',
        address:'',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      tableData:[{}],
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


