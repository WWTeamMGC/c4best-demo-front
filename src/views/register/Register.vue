<template>
  <div class="register">
    <form>
      <h3>注册页面</h3>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <button>注册</button>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.register {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-top: 3px solid #FAC718;
  background-color: #CDCBCB;

}

.register > form {
  text-align: center;
  padding: 20px;
}

.register > form > input {
  width: 80%;
  height: 30px;
  margin-top: 10px;
}

.register > form > button {
  width: 212px;
  height: 40px;

  margin-top: 10px;
  outline: none;
}
</style>