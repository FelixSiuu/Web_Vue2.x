<template>
  <div class="footer_container">
    <!-- select all button -->
    <div class="selectAll"><input type="checkbox" :checked="fullState" @change="changeAllState" />&nbsp;<span>Select All</span></div>
    <!-- total count -->
    <div class="total">total: {{ getTotal.toFixed(2) }}</div>
    <!-- settle button -->
    <button class="settle">settle ({{ settle }})</button>
  </div>
</template>

<script>
export default {
  props: ['fullState', 'getTotal', 'settle'],
  methods: {
    changeAllState(e) {
      const stateAll = { checked: e.target.checked }
      this.$emit('changeAllState', stateAll)
    }
  }
}
</script>

<style lang="less" scoped>
.footer_container {
  position: fixed;
  bottom: 50px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  .selectAll {
    margin-left: -13px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .total {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: red;
  }
  .settle {
    width: 110px;
    margin-right: -10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    background-color: teal;
    color: #fff;
  }
}
</style>
