<template>
  <div class="header_container">
    <!-- header -->
    <van-nav-bar title="User System" left-text="Menus" right-text="Logout" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-popup v-model="show" position="left" :style="{ height: '45%', width: '30%' }">
      <!-- bars -->
      <Sidebar></Sidebar>
    </van-popup>
  </div>
</template>

<script>
import Sidebar from '@/components/UserInfo/SideBar/SideBar.vue'
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onClickLeft() {
      this.show = true
    },
    onClickRight() {
      this.$router.push('/login')
      sessionStorage.removeItem('token')
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__content {
  background-color: teal;
  .van-nav-bar__title,
  .van-nav-bar__text,
  .van-icon-arrow-left:before {
    color: #fff;
  }
  .van-icon-arrow-left:before {
    content: '';
  }
}
</style>
