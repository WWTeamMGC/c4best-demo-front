<template>
  <el-form class="register-container">
    <h3 class="register_title">账户注册</h3>
    <el-form-item
        label="用户名"
        label-width="80px"
    class="username">
      <el-input v-model="username"
          type="text"
          autocomplete="off"
          placeholder="请输入邮箱"
          >
      </el-input>
    </el-form-item>
    <el-form-item
        label="密码"
        label-width="80px">
      <el-input v-model="password"
      type="password"
      autocomplete="off"
      placeholder="创建密码">
      </el-input>
    </el-form-item>
    <el-form-item class="register_submit">
      <el-button type="primary" class="register_submit"  @click="register" ref="button01">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Register",
  methods:{
    register() {
      var name = this.username
      var passWord = this.password
      if (name != null && name != ""&& passWord != null && passWord != ""){
        this.$refs.button01.submit;
        let postData = this.qs.stringify({
          username: this.username,
          password: this.password
        })

        this.$axios({
          method:'post',
          url:'/user/SignOut',
          data:postData
        }).then(response=>{
          var data = response.data;
          if (data.code == 1){
            //注册成功跳转登录页面
            this.$router.push({
              name:''
            })
          }else {
            alert("服务器繁忙.......")
          }
        })
      }else {
        alert("用户名或密码不能为空")
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register-container{
  border-radius: 15px;
  background-clip:padding-box;
  margin: 180px auto;
  width :350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

}
.register_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.register_submit{
  margin: 10px auto 0px 50px;
}
</style>
