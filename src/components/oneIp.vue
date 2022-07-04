<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        type="index"
        :index="indexMethod">
    </el-table-column>
    <el-table-column
        prop="url"
        label="URL"
        width="180">
    </el-table-column>
    <el-table-column
        prop="count"
        label="访问次数"
        width="180">
    </el-table-column>

  </el-table>
</template>
<script>
export default {
  name: "oneip",
  data(){},
  methods: {
    indexMethod(index) {
      return index * 2;
    }
  }
}
</script>

<style scoped>

</style>