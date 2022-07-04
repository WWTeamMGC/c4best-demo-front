<template>
  <div>
    <div id="add">
      <el-button type="text"icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true" size="big" >添加</el-button>
  </div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          fixed
          prop="word"
          label="敏感词"
          width="1500">
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="100">

        <template slot-scope="scope">

          <el-button @click="BadWordDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>

          <el-button @click="BadWordDelete(scope.row)" type="text" size="big">删除</el-button>

        </template>
      </el-table-column>
    </el-table>




    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <el-form-item label="敏感词" :label-width="formLabelWidth">
          <el-input v-model="form.word" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="emptyUserData('form')">取 消</el-button>
        <el-button type="primary" @click=" insertBadWord('form')" ref="button">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "badword",
  methods: {
    searchBadWord(){
      this.$axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/BadApi/Ip'
      }).then(response => {
        this.tableData=response.data.badiplist
      })
    },
    BadWordDelete(index, row) {
      /*console.log(index, row);*/
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:8080:/BadApi/Ip',
        data:row
      }).then(response=>{
        //删除成功
        if (response.data == 1){
          this.searchBadWord()
        }else {
          alert("系统繁忙，请稍后重试.....")
        }
      })
    },
    insertBadWord(){

      var word = this.form.word
      if (word != null && word != ""){
        this.$refs.button.submit;
        let postData = this.qs.stringify({
          word: this.form.word
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
            this.searchBadWord()
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
        word:''
      }

    },
  },

  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        word: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      tableData: [{}]
    }
  },

  created() {
    this.searchBadWord()
  }
}
</script>

<style scoped>

</style>
