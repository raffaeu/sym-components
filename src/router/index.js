import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SymDataTableSample from '@/components/sym-data-table/SymDataTableSample'
import SymButtonSample from '@/components/sym-button/SymButtonSample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/sym-data-table',
      name: 'sym-data-table',
      component: SymDataTableSample
    },
    {
      path: '/sym-button',
      name: 'sym-button',
      component: SymButtonSample
    }
  ]
})
