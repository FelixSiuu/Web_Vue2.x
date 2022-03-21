<template>
  <div class="cart_container">
    <van-nav-bar title="Cart" fixed />
    <Goods v-for="item in cartList" :key="item.id" :img="item.goods_img" :name="item.goods_name" :count="item.goods_count" :price="item.goods_price" :state="item.goods_state" :id="item.id" @changeState="changeState" @decrease="decrease" @increase="increase"></Goods>
    <Footer :fullState="fullState" @changeAllState="changeAllState" :getTotal="getTotal" :settle="settle"></Footer>
  </div>
</template>

<script>
import Goods from '@/components/Cart/Goods.vue'
import Footer from '@/components/Cart/Footer.vue'
import { getCartInfoAPI } from '@/api/getCartInfoAPI.js'
export default {
  components: {
    Goods,
    Footer
  },
  data() {
    return {
      cartList: []
    }
  },
  methods: {
    async initCartInfo() {
      const { data: res } = await getCartInfoAPI()
      if (res.status) this.cartList = res.list
      else console.error('get cart list failed')
    },
    // click the checkbox and change the state
    changeState(e) {
      this.cartList.some((item) => {
        if (item.id === e.id) item.goods_state = e.checked
      })
    },
    // click the select all and change all button
    changeAllState(e) {
      this.cartList.forEach((item) => (item.goods_state = e.checked))
    },
    // decrease count
    decrease(count, id) {
      this.cartList.some((item) => {
        if (item.id === id) {
          item.goods_count = count
          return true
        }
      })
    },
    // increase count
    increase(count, id) {
      this.cartList.some((item) => {
        if (item.id === id) {
          item.goods_count = count
          return true
        }
      })
    }
  },
  created() {
    this.initCartInfo()
  },
  computed: {
    // select all button checked by all item
    fullState() {
      return this.cartList.every((item) => item.goods_state)
    },
    // get total price (selected)
    getTotal() {
      return this.cartList.filter((item) => item.goods_state).reduce((total, item) => (total += item.goods_price * item.goods_count), 0)
    },
    // settle
    settle() {
      return this.cartList.filter((item) => item.goods_state).reduce((total, item) => (total += item.goods_count), 0)
    }
  }
}
</script>

<style lang="less" scoped>
.cart_container {
  padding: 46px 0 100px 0;
}
/deep/ .van-nav-bar__content {
  background-color: teal;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
