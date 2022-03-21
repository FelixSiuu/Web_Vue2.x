import articlesRequest from '@/utils/articlesRequest.js'

export const getArticlesInfoAPI = function(_page, _limit) {
  return articlesRequest.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
