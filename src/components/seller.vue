<template>
  <div>
    <e-charts class="chart" :option="option"></e-charts>

  </div>

</template>

<script>
export default {
  name: "seller",
  data() {
    return {
      data: this.totalCount()
    }
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: 'category',
          data: this.data.map(d => d.time)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.data.map(d => d.value),
            type: 'line'
          }
        ]
      }
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
        method: 'get',
        url: 'http://127.0.0.1:8080/Count/Figure'
      }).then(response => {
        return response.data.data
      })
      return this.response.data.data
    }
  },
  //数据实时更新
  created() {
    setInterval(() => {
      this.data = this.totalCount()
    }, 1000 * 5)
  }
}
</script>

<style scoped>
.chart {
margin-top: auto;
  height: 400px;
}
</style>
