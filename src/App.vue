<template>
  <div id="app">
<!--    <router-view/>-->
    <login></login>
  </div>
</template>


<script>
 import Login from "../src/components/Login"

export default {
  name:'App',
  components:{
    Login
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
