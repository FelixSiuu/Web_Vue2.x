<template>
  <div class="login_container" style="height: 100vh">
    <div class="login_box">
      <!-- icon -->
      <div class="icon">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <!-- form filed -->
      <form class="form">
        <div class="username"><label for="username">username</label><input type="text" id="username" v-model.trim="user" @keyup.enter="login" placeholder="admin" /></div>
        <div class="password"><label for="password">password</label><input type="password" id="password" v-model.trim="pwd" @keyup.enter="login" placeholder="123456" /></div>
      </form>
      <!-- reset & login button -->
      <div class="secondary">
        <van-button type="primary" @click="reset">Reset</van-button>
        <van-button type="info" @click="login">Login</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    login() {
      if (this.user === 'admin' || this.pwd === '123456') {
        sessionStorage.setItem('token', 'Bearer xxxx')
        this.$router.push('/user')
      } else {
        Toast.fail('admin 123456')
        sessionStorage.removeItem('token')
      }
    },
    reset() {
      this.user = ''
      this.pwd = ''
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #35495e;
  height: 100%;
  .login_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    padding: 50px 0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 6px rgb(255 255 0.6);
    .icon {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      border-radius: 50%;
      background-color: #fff;
      border: 5px solid #fff;
      box-shadow: 0 0 6px rgb(255 255 0.6);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .username,
    .password {
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
    }
    input {
      height: 20px;
      margin-left: -40px;
      padding-left: 5px;
    }
    .secondary {
      padding-right: 35px;
      text-align: right;
      button {
        margin-left: 5px;
        color: #fff;
        border-radius: 5px;
        outline: none;
      }
    }
  }
}
</style>
