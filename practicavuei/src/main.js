import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
import 'animate.css'

import {
  firestorePlugin
} from 'vuefire'

// librerias del usuario

import 'bootstrap/dist/css/bootstrap.css'
// import fireApp from './config/_firebase'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    let user = Auth.checkUser()

    if (user == null) {
      next({
        name: 'Login'
      })

      return null
    }

    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
