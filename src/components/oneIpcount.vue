<template>
  <e-charts class="chart" :option="option" style="margin-top:20px"></e-charts>

</template>

<script>
export default {
  name: "oneIpcount",
  data(){
    return{
      data: this.getRandomData()
    }
  },
  computed:{
    option() {
      return{
        xAxis: {
          type: 'category',
          data:/* ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']*/this.data.map(d => d.time)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: /*[120, 200, 150, 80, 70, 110, 130],*/ this.data.map(d => d.value),
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
    }
  },
  methods: {
    //模拟后端来的数据，后端来数据之后注释掉
    getRandomData() {
      return [{
        time: '2018-01-01',
        value: Math.random() * 10
      },
        {
          time: '2018-01-01',
          value: Math.random() * 100
        },
        {
          time: '2018-01-01',
          value: Math.random() * 212
        }, {
          time: '2018-01-01',
          value: Math.random() * 212
        },]
    },
    //接收后端来的数据
    totalCount() {
      this.$axios({
        method: 'post',
        url: ''
      }).then(response => {
        return response
      })
    }
  },
  //数据实时更新
  created() {
    setInterval(() => {
      this.data = this.getRandomData()
    }, 1000 * 60)
  }

}
</script>

<style scoped>
.chart{
  margin-top: 20px;
  margin-left: 400px;
  height: 800px;
  width: 800px;
}
</style>
