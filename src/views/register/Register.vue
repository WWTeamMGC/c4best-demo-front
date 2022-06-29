<template>
  <section>
    <div class="container">
      <div class="form">
        <h2>账户注册</h2>
        <form>
          <div class="inputBox">
            <input v-model="username" type="text" placeholder="请输入邮箱"></input>
          </div>
          <div class="inputBox">
            <input type="password" v-model="password" placeholder="密码"></input>
          </div>
<!--          <div class="inputBox">
            <input type="password" placeholder="确认密码"></input>
          </div>-->
          <div class="inputBox">
            <input type="button" value="注册" @click="register" ref="button01">
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  methods: {
    register() {
      var name = this.username
      var passWord = this.password
      //模拟注册成功跳转，后续这段代码注释掉
      this.$router.push({
        path: '/'
      })
      if (name != null && name != "" && passWord != null && passWord != "") {
        var regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (regExp.test(name)){
          this.$refs.button01.submit;
          let postData = this.qs.stringify({
            username: this.username,
            password: this.password
          })

          this.$axios({
            method: 'post',
            url: '/user/SignOut',
            data: postData
          }).then(response => {
            var data = response.data;
            if (data.code == 1) {
              //注册成功跳转登录页面
              this.$router.push({
                path: '/'
              })
            } else {
              alert("服务器繁忙.......")
            }
          })
        }else {
          alert("请输入合法的邮箱")
        }
      } else {
        alert("用户名或密码不能为空")
      }
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom,#409EFF,#fff);
}
.container{
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255,255,255,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px  rgab(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.5);
  border-right: 1px solid rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.5);
}
.form{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;

}
.form h2{
  position: relative;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom:30px ;
  cursor: pointer;
}
.form h2::before{
  content: "";
  position: absolute;
  bottom: -5px;
  width: 0px;
  height: 3px;
  background: #fff;
  transition: 0.5s;
}
.form h2:hover:before{
  width: 53px;
}
.form .inputBox{
  width: 100%;
  margin-top: 20px;
}
.form .inputBox input{
  width: 100%;
  padding: 10px 20px;
  background: rgba(255,255,255,0.1);
  outline: none;
  //border: none;
  border-radius: 30px;
  border: 1px solid rgba(255,255,255,0.5);
  border-right: 1px solid rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.5);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.form .inputBox input ::placeholder{
  color: #fff;
}
.form.inputBox input[type="submit"]{
  background: #fff;
  color:#666;
  max-width: 120px;
  margin-bottom: 20px ;
  font-weight: 600;
  cursor: pointer;
}

</style>
