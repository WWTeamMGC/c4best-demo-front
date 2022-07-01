<template>
<div id="main" style="width: 800px;height: 600px"></div>
</template>

<script>
export default {
  name: "distributedFlow",
  data(){

  },
  mounted:function () {
    var myChart=echarts.init(document.querySelector('#main'))
    myChart.setOption()
  }
}


</script>

<style scoped>

</style>