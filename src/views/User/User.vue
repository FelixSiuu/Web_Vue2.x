<template>
  <div class="user_container">
    <!-- header -->
    <Header></Header>
    <!-- page body -->
    <div class="user_body">
      <div class="user_main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/UserInfo/Header/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.user_body {
  display: flex;
  .user_main {
    padding: 10px;
  }
}
</style>
