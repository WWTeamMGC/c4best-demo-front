<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="ip"
        label="地址"
        width="700">
    </el-table-column>
    <el-table-column
        prop="count"
        label="访问次数"
        width="700">
    </el-table-column>

    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
        <router-link to="/oneIp">
          <el-button type="primary" round>查看</el-button>
        </router-link>
        <el-button @click="goBlack(scope.$index, scope.row)" type="danger" round >拉黑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneIpcount",
  data() {
    return {
      tableData: [],
      search: ''
    }
  },
  computed: {},
  methods: {
    goBlack(index, row) {
      let postData = this.qs.stringify({
        ip: row.ip
      })
      /*console.log(index, row);*/
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:8080/BadApi/setIp',
        data:postData
      }).then(response=>{
        //拉黑成功
        if (response.data.code == 1000){
          this.searchOneIpCount()
        }else {
          alert("系统繁忙，请稍后重试.....")
        }
      })
    },
    searchOneIpCount(){
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/Count/IpDetail'
      }).then(response => {
        this.tableData=response.data.data
      })
    },
  },
  created() {
    this.searchOneIpCount()
  }
}
</script>

<style scoped>

</style>
