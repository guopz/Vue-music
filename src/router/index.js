import Vue from 'vue'
import Router from 'vue-router'

import Reacommend from 'compts/recommend/recommend'
import Rank from 'compts/rank/rank'
import Search from 'compts/search/search'
import Singer from 'compts/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Reacommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
