import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

// librerias del usuario

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permisos para entrar')

    if (Auth.checkUser()) {
      next()
    }

    router.push({
      name: 'Login'
    })
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
