<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">Cart</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o">User</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
