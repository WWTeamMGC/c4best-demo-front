<template>

  <div class="com-container">
  <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
  name: "seller",
  data() {
    return {
      chartInstance: null,
      allData: null ,//服务器返回的数据
    }
  },
  mounted() {
    this.initChart()
    this.getData()

  },
  method: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
    },
    //获取服务器的数据
    getData() {

      this.updateChart()
    },
    //更新图表
    updateChart() {
      const option = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8']
        },
        series: [
          {
            type: 'bar',
            data: [1200, 1400, 5345, 5434, 4444, 5342, 4345, 3452]
          }
        ]
      }
      this.chartInstance.setOptions(option)
    }
  }
}
</script>

<style scoped>

</style>