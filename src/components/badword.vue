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
          <el-button @click="handleClick(scope.row)" type="text" size="big">删除</el-button>
        </template>
      </el-table-column>
    </el-table>




    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="敏感词" :label-width="formLabelWidth">
          <el-input v-model="form.word" autocomplete="off"></el-input>
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
  name: "badword",
  methods: {
    handleClick(row) {
      console.log(row);
    }
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
      tableData: [{
        date: '2016-05-02',

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
