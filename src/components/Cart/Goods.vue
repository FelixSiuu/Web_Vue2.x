<template>
  <div class="goods_container">
    <div class="box">
      <!-- left box, checkbox -->
      <div class="box_left"><input type="checkbox" id="checkbox" :checked="state" @change="stateChange" /></div>
      <!-- right box, include img, title, price -->
      <div class="box_right">
        <img class="img" :src="img" alt="" />
        <div class="info">
          <!-- title -->
          <div class="info_up title">{{ name }}</div>
          <div class="info_down">
            <!-- price -->
            <div class="price">$ {{ price.toFixed(2) }}</div>
            <!-- counter -->
            <div class="counter">
              <button @click="decrease">-</button>
              <span>{{ num }}</span>
              <button @click="increase">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'img', 'name', 'price', 'state', 'id'],
  data() {
    return {
      num: this.count
    }
  },
  methods: {
    stateChange(e) {
      const newState = { checked: e.target.checked, id: this.id }
      this.$emit('changeState', newState)
    },
    decrease() {
      if (this.num > 1) this.num--
      this.$emit('decrease', this.num, this.id)
    },
    increase() {
      this.num++
      this.$emit('increase', this.num, this.id)
    }
  }
}
</script>

<style lang="less" scoped>
.goods_container {
  .box {
    height: 100px;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .box_left {
      flex: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .box_right {
      flex: 92%;
      display: flex;
      .img {
        flex: 30%;
        height: 100%;
      }
      .info {
        flex: 70%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          font-weight: bold;
          font-size: 12px;
        }
        .info_down {
          display: flex;
          justify-content: space-between;
          .price {
            color: red;
            font-size: 13px;
            font-weight: bold;
          }
          .counter {
            button {
              border: none;
              width: 30px;
              height: 30px;
            }
            span {
              display: inline-block;
              width: 50px;
              font-size: 12px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
