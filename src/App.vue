<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>


<script>


export default {
  name:'App',
  components:{

    }
}
</script>



<style lang="scss">
html body{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
}
body{
  position: fixed;
  top: 0;
  width: 100%;
}
.lizi{
  position:fixed;
  top:0;
  width:100%;
}
</style>
