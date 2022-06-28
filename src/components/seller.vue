<template>
<div class="com-containe" ref="seller_ref"></div>
</template>

<script>
export default {
  name: "seller",
  data () {
    return {
      chartInstance:null
    }
  },
  mounted() {},
  method : {
    // 初始化echartsInstance对象
    initChart(){
     this.chartInstance = newthis.$echarts.init(this.$refs.seller_ref)
    },
     //获取服务器的数据
      getData(){},
      //更新图表
      updateChart(){},

  }
}
</script>

<style scoped>

</style>