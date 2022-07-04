<template>
  <body>
  <div>
    <vue-particles
        color="#555"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :pparticleSize="4"
        linesColor="#555"
        :linewidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :lineDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"/>
  </div>
  <div class="login">
    <div class="left"></div>
    <div class="right">
      <form>
        <h1>Login</h1>
        <input  class="userinfo" type="text" placeholder="用户名" v-model="username"/>
        <input  class="userinfo" type="password" placeholder="密码" v-model="password"/>
        <input class="submit" type="button" @click="open" value="登录" ref="button"/>
      </form>
      <div class="help">
       <router-link to="/register">注册账户</router-link>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "Login",
  methods:{
    /*登录部分前端验证*/
    open() {
      var name = this.username
      var passWord = this.password
      //模拟登录成功跳转，后续这段代码注释掉
      if (name != null && name != ""&& passWord != null && passWord != ""){
        this.$refs.button.submit;
        let postData = this.qs.stringify({
          username: this.username,
          password: this.password
        })
        this.$axios({
          method:'post',
          url:'http://127.0.0.1:8081/user/SignIn',
          data:postData
        }).then(response=>{
          var data = response.data;
          
          if (data.code == 1000){
          localStorage.setItem("token",data.data);
            //登录成功跳转首页页面
          this.$router.push({
            name:'home'
          })
          }else {
            alert("账号或密码错误")
          }
        })
      }else {
        alert("用户名或密码不能为空")
      }
    },
  }
}
</script>

<style scoped>


.login {
  width: 600px;
  height: 400px;
  background: rgba(255, 255, 255, 60%);
  position: absolute;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  margin-top:-200px;
  margin-left:-100px;
  display: flex;

}

.left {
  width: 200px;
  height: 400px;
  background-size: cover;
  opacity: 60%;
}

.right {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: white;
}

.right h1 {
  margin-top: 20px;
  text-align: center;
}

.right .userinfo {
  width: 280px;
  height: 20px;
  padding: 10px;
  margin: 30px 30px;
  border: none;
  font-size: 20px;
  border-bottom: 1px solid black;
  outline: none;
}

.right .submit {
  width: 200px;
  height: 40px;
  background: linear-gradient(100deg, #409EFF, #FFFFFF);
  transform: translateX(50px);
  margin-top: 10px;
  align-self: center;
  border-radius: 5px;
  border:none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  box-shadow: 5px 5px 5px #88888888;
}
.right .submit:hover{
  opacity: 80%;
}
.help{
  width: 300px;
  display :flex;
  margin-top:30px;
  justify-content:space-between;
  transform:translateX(50px);
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
