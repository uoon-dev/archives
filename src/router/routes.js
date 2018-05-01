import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/views/Body'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body
    }
  ]
})
