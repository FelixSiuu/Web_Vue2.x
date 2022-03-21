<template>
  <div class="home_container">
    <van-nav-bar fixed title="News" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <van-list v-model="loading" :finished="finished" finished-text="睇晒了 ～" @load="onLoad">
        <ArticleInfo v-for="item in list" :key="item.art_id" :title="item.title" :imageSrc="item.cover" :author="item.aut_name" :comCount="item.comm_count" :pubDate="item.pubdate.split(' ')[0]"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticlesInfoAPI } from '@/api/getArticlesInfoAPI.js'
import ArticleInfo from '@/components/ArticleInfo/ArticleInfo.vue'
export default {
  components: {
    ArticleInfo
  },
  data() {
    return {
      page: 1,
      limit: 10,
      list: [],
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  methods: {
    async initArticlesInfo() {
      const { data: res } = await getArticlesInfoAPI(this.page, this.limit)
      // pull refresh (up)
      if (this.loading) {
        this.list = [...this.list, ...res]
        this.loading = false

        // pull refresh (down)
      } else if (this.isLoading) {
        this.list = [...res, ...this.list]
        this.isLoading = false
      }
      // loading is finished
      if (res.length === 0) {
        this.finished = true
        this.page = this.list.length / this.limit
      }
    },
    onLoad() {
      this.page++
      this.initArticlesInfo()
    },
    onRefresh() {
      this.page++
      this.initArticlesInfo()
    }
  },
  created() {
    this.initArticlesInfo()
  }
}
</script>

<style lang="less" scoped>
.home_container {
  padding: 46px 0 50px 0;
}
/deep/ .van-nav-bar__content {
  background-color: teal;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
