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
      data: this.getRandomData()
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
        method: 'post',
        url: ''
      }).then(response => {
        return [response]
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
.chart {
  height: 400px;
}
</style>
