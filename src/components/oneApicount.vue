<template>
  <div id="oneApicount">
    <div id="demo2" style="width: 1000px;height: 800px"></div>
  </div>
</template>

<script>
export default {
  name: "oneApicount",
  data(){
    return{
      option :{
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
    }
  },
  mounted:function () {
    //初始化绘制图表的echarts实例
    var myChart=echarts.init(document.querySelector('#demo2'))

    myChart.setOption(this.option)
  }

}
</script>

<style scoped>
#demo2{
    margin-top: 20px;

}
</style>