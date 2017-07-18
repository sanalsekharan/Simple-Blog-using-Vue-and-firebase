// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

// custom Global Directive

Vue.directive('theme', {
  bind (el, bind, vnode) {
    if (bind.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (bind.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
  }
})

// creating custom global filters

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
