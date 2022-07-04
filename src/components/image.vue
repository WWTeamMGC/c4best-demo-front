<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="date"
        label="图片"
        width="1300px"
        height="1000px"
    >

      <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit">

      </el-image>
    </el-table-column>

    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="success" size="big">允许</el-button>
        <el-button @click="" type="danger" size="big">驳回</el-button>
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
    },
    searchImg(){
      this.$axios({
        method: 'post',
        url: ''
      }).then(response => {
        this.tableData=response.data.badiplist
      })
    }
  },
  created() {
    this.searchImg()
  },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      tableData: [{
        data: ''
      }]
    }
  }
}
</script>

<style  scoped>

</style>
