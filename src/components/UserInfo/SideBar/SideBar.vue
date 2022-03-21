<template>
  <div class="SideBar_container">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="Info" to="/user/info" />
      <van-sidebar-item title="Authority" to="/user/authority" />
      <van-sidebar-item title="Goods" to="/user/goods" />
      <van-sidebar-item title="Orders" to="/user/orders" />
      <van-sidebar-item title="System" to="/user/system" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-sidebar {
  width: 100%;
  .van-sidebar-item__text {
    font-weight: bold;
  }
}
</style>
