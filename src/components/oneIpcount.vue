<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="url"
        label="地址"
        width="700">
    </el-table-column>
    <el-table-column
        prop="ncount"
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
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "oneIpcount",
  data() {
    return {
      tableData: [{}],
      search: ''
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
