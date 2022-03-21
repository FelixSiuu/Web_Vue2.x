<template>
  <div class="articleInfo_container">
    <div class="item">
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="imageSingle" v-if="imageSrc.type === 1"><img :src="imageSrc.images[0]" alt="" /></div>
      </div>
      <div class="images" v-if="imageSrc.type === 3">
        <div class="image" v-for="(item, index) in imageSrc.images" :key="index"><img :src="item" alt="" /></div>
      </div>
      <div class="label">
        <span>作者： {{ author }}</span>
        <span>評論數： {{ comCount }} </span>
        <span>日期： {{ pubDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: Object
    },
    author: {
      type: String
    },
    comCount: {
      type: String
    },
    pubDate: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 10px;
  margin-bottom: 5px;
  .header {
    display: flex;
    .title {
      margin: 0;
      flex: 70%;
    }
    .imageSingle {
      flex: 30%;
      img {
        max-width: 100%;
      }
    }
  }
  .images {
    display: flex;
    justify-content: space-around;
    .image {
      flex: 1;
      img {
        max-width: 100%;
      }
    }
  }
  .label span {
    padding-right: 10px;
    color: gray;
    font-size: 12px;
  }
}
</style>
