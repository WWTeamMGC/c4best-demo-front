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


  <el-dialog title="新增" :visible.sync="dialogFormVisible">
    <el-form :model="form" ref="form">
      <el-form-item label="IP" :label-width="formLabelWidth">
        <el-input v-model="form.ip" autocomplete="off"></el-input>
      </el-form-item>

<!--      <el-form-item label="PC/MP" :label-width="formLabelWidth">
        <el-input v-model="form.pcmp" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="ADDRESS" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>-->

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="emptyUserData('form')">取 消</el-button>
      <el-button type="primary" @click=" insertBadMan('form')" ref="button">确 定</el-button>
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
    },
    insertBadMan(){

      var ip = this.form.ip
      if (ip != null && ip != ""){
        this.$refs.button.submit;
        let postData = this.qs.stringify({
          ip: this.form.ip
        })
        /*this.dialogFormVisible = false
        this.emptyUserData();*/
        this.$axios({
          method:'post',
          url:'http://127.0.0.1:8080/user/SignIn',
          data:postData
        }).then(response=>{
          var data = response.data;
          if (data.code == 1000){
            this.searchBadMan()
            this.dialogFormVisible = false

          }else {
            alert("新增失败")
          }
          this.emptyUserData();
        })
      }else {
        alert("用户名或密码不能为空")
      }
    },
    /**
     * 清空绑定数据
     */
    emptyUserData() {

      this.dialogFormVisible = false
      this.form = {
        ip:''
      }

    },
  },
  created() {
    this.searchBadMan()
  }
}
</script>

<style scoped>

</style>


