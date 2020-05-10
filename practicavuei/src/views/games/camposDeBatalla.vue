<template>
<div>
     <input type="button" @click="retar" value="GG IZ" />

     <div v-for="partida in coleccionDePartidas" :key="partida.id">
         <Arena
            :partida="partida"
            ></Arena>
        ==========
     </div>
</div>
</template>

<script lang="js">
// import UserArena from '@/components/games/juegoPiedras'
import FireApp from '@/config/_firebase.js'
import Auth from '@/config/auth'
import Arena from '@/components/games/miniaturaJuegoPiedras'

const partidas = FireApp.firestore().collection('juego1')

export default {
  name: 'sala1',
  props: ['user_opcion'],
  components: {
    Arena
  },

  data () {
    return {
      partida: {},
      partidas: [],
      coleccionDePartidas: [],
      coleccionDePartidasSecundaria: [],
      user: {}
    }
  },

  beforeRouteEnter (to, from, next) {
    // console.log(partida)
    next(vm => {
      vm.user = Auth.getUser()

      if (to.params.vista === 'abiertas') {
        vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
      }
      if (to.params.vista === 'misSalas') {
        vm.$bind('coleccionDePartidas', partidas.where('participantes.0', '==', vm.user.uid))
        vm.$bind('coleccionDePartidasSecundaria', partidas.where('participantes.1', '==', vm.user.uid))
      }

      // vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
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
