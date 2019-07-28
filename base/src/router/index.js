import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = []

const routerContext = require.context('@/router', true, /index\.js$/)

routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) return

  const routerMoudle = routerContext(route)

  routes = [...routes, ...(routerMoudle.default || routerMoudle)]
})

export default new Router({
  mode: 'history',
  base: '/',
  routes
})
