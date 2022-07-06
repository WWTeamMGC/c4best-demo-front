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
      abcdata: []
    }
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: 'category',
          data: this.abcdata.map(d => d.time)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.abcdata.map(d => d.value),
            type: 'line'
          }
        ]
      }
    }
  },
  methods: {
    //接收后端来的数据
    totalCount() {
      this.$axios({
        method: 'get',
        headers: {'Authorization': "Bearer "+localStorage.getItem("token")},
        url: 'http://127.0.0.1:8080/Count/Figure'
      }).then(response => {
        this.abcdata=response.data.data
      })
      // return response.data.data
    }
  },
  //数据实时更新
  created() {
    setInterval(() => {
      this.totalCount()
    }, 1000 * 30)
  }
}
</script>

<style scoped>
.chart {
margin-top: auto;
  height: 780px;
}
</style>
