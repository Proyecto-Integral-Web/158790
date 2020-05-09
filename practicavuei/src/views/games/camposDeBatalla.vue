<template>
<div>
     Esto solo es texto de relleno
     No srive mas que para mostrar una pantalla pitera
     Compren en Cyberpuerta o PCX.com.mx sus piezas, apoyen el negocio local
     Yo no lo descargo porque ya la tengo
     <input type="button" @click="retar" value="GG IZ" />

     <div v-for="part in coleccionDePartidas" :key="part.id">
         <h1>{{part}}</h1>
        ==========
     </div>
</div>
</template>

<script lang="js">
// import UserArena from '@/components/games/juegoPiedras'
import FireApp from '@/config/_firebase.js'
import Auth from '@/config/auth'

const partidas = FireApp.firestore().collection('juego1')

export default {
  name: 'sala1',
  props: ['user_opcion'],
  components: {
    // UserArena
  },

  data () {
    return {
      partida: {},
      partidas: [],
      coleccionDePartidas: [],
      user: {}
    }
  },

  beforeRouteEnter (to, from, next) {
    // console.log(partida)
    next(vm => {
      vm.user = Auth.getUser()

      vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
    })
  },

  firestore: {
    partida: FireApp.firestore().collection('juego1')
  },

  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.user = Auth.getUser()
        this.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
      }
    }
  },

  mounted () {
    this.user = Auth.getUser()
    console.log('----------')
  },

  methods: {
    crearPartida () {
    },

    retar () {
      this.user = Auth.getUser()
    }
  }
}
</script>

<style lang="scss">
body {
  background-image: url("../../assets/wall1.jpg") !important;

  background-size: 100%;
}

.partida {
  background-color: whitesmoke;
}
</style>
