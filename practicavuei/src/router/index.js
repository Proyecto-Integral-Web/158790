import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import salaJuegos from '../views/games/UserArena'
import salaPartidas from '../views/games/camposDeBatalla'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Login',
  component: Login,
  meta: {
    auth: false
  }
},
{
  path: '/signUp',
  name: 'SignUp',
  component: SignUp,
  meta: {
    auth: false
  }
},
{
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: {
    auth: true
  }
},
{
  path: '/profile',
  name: 'profile',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue'),
  meta: {
    auth: true
  }
},
{
  path: '/sala/:no_partida',
  name: 'UserArena',
  component: salaJuegos,
  meta: {
    auth: true
  }
},
{
  path: '/partidas/:vista',
  name: 'GameArena',
  component: salaPartidas,
  meta: {
    auth: true
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
