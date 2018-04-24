import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/views/Body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body
    }
  ]
})
