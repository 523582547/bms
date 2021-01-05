<template>
  <div class="login">
    <div class="form">
        <el-row>
          <el-col :span="12" style="padding-top:50px;">
            <div class="global-tc">
              <img src="../assets/logo.png" alt="logo">
              <h2>危险品管理系统</h2>
              <img src="../assets/img/login-gif.gif" alt="gif">
            </div>
          </el-col>
          <el-col :span="12" class="right" style="background:#fff;height:470px;" v-if="loginType">
            <img
              src="../assets/img/qrcode-login.png"
              alt="qrcode"
              width="55"
              height="55"
              class="tiplogo"
              @click="changeType"
            >
            <p class="title">欢迎登录</p>
            <div class="input-group user">
              <input type="text" placeholder="请输入账号" v-model.trim="form.account">
            </div>
            <div class="input-group pwd">
              <input type="password" placeholder="请输入密码" v-model.trim="form.password">
            </div>
            <el-checkbox v-model.trim="form.isChecked">记住密码</el-checkbox>
            <el-button
              type="primary"
              class="btn"
              @click="login"
            >登录</el-button>
            <p class="tip">请使用IE9及以上版本，EDGE、360极速、搜狗、腾讯、UC、遨游、谷歌、火狐、OPERA浏览器登录</p>
          </el-col>
          <el-col :span="12" class="right" style="background:#fff;height:470px;text-align:center;" v-else>
            <img
              src="../assets/img/password-login.png"
              alt="password"
              width="55"
              height="55"
              class="tiplogo"
              @click="changeType"
            >
            <p style="margin-top:34px;text-align:center;color:#2b67f2;font-size:22px;font-weight:500;">扫码登陆</p>
            <div style="margin:40px 0;">
              <img src="../assets/img/login-qrcode.png" alt="qrcode" width="170" height="170">
            </div>
            <p style="margin-top:14px;color:red;display:none;">二维码失效，请点击刷新</p>
            <p class="tip" style="text-align:center;color:#333;">使用App扫码登录</p>
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import USER from '@/api/const/user'

export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        isChecked: false
      },
      loginType: true
    }
  },
  methods: {
    changeType () {
      this.loginType = !this.loginType
    },
    login () {
      if (this.form.name === '') {
        this.$message.error('请输入账户')
        return
      }
      if (this.form.password === '') {
        this.$message.error('请输入密码')
        return
      }
      this.$reqPostNoLoading(USER.Login, this.form).then((res) => {
        console.log(res)
        // this.logging = false
        this.$message.success('登录成功')
        this.$router.push({
          path: '/csp/depot'
        })
      }).then(() => {
        this.logging = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: #5687de url("../assets/img/login-bg.jpg") no-repeat;
  background-size: cover;
  h2{
    padding: 30px 50px;
    color: #FFF;
    font-size: 35px;
    line-height: 54px;
    font-weight: 600;
  }
  .form {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -440px;
    width: 860px;
    height: 470px;
    overflow:hidden;
    background: rgba(250,250,250,0.4);
    border-radius: 14px;
    .right{
      position:relative;
      padding:46px;
      .tiplogo{
        position:absolute;
        top:9px;
        right: 9px;
        cursor: pointer;
      }
      .title{
        position:relative;
        margin-bottom:60px;
        font-size: 24px;
        color: #333;
      }
      .title:after{
        display: block;
        content: " ";
        box-sizing: border-box;
        border-bottom: 5px solid#1769e3;
        position: absolute;
        width:80px;
        bottom: -10px;
        left: 8px;
        border-radius:2.5px;
      }
      .input-group {
        margin:10px 0;
        border-bottom:1px solid #ccc;
        input{
          background-color: #fff;
          height: 42px;
          width: 87%;
          padding: 0px 28px;
          font-size: 16px;
          margin-left:28px;
        }
      }
      .user{
        background:url('../assets/img/login-username.png') no-repeat;
        background-position-y:center;
        background-size:28px 28px;
      }
      .pwd{
        margin:20px 0;
        background:url('../assets/img/login-password.png') no-repeat;
        background-position-y:center;
        background-size:28px 28px;
      }
      .btn{
        margin:35px 0 29px;
        width:100%;
        padding-top:16px;
        padding-bottom:16px;
        font-size:16px;
        background:#1769e3;
      }
      .tip{
        font-size:12px;
        line-height: 24px;
        color: #969696;
        text-align:left;
      }
    }
  }
}
</style>
