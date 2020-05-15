<template>
<div>
     <div v-for="partida in coleccionDePartidas" :key="partida.id">
         <Arena
            :partida="partida"
            ></Arena>
     </div>
     <div v-for="partida in coleccionDePartidasSecundaria" :key="partida.id">
         <Arena
            :partida="partida"
            ></Arena>
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
        vm.coleccionDePartidas = []
        vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
      }
      if (to.params.vista === 'misSalas') {
        vm.coleccionDePartidas = []
        vm.coleccionDePartidasSecundaria = []
        vm.$bind('coleccionDePartidas', partidas.where('retador', '==', vm.user.uid))
        vm.$bind('coleccionDePartidasSecundaria', partidas.where('contricante', '==', vm.user.uid))
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
        if (value.vista === 'abiertas') {
          this.coleccionDePartidas = []
          this.coleccionDePartidasSecundaria = []

          this.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
        }
        if (value.vista === 'misSalas') {
          this.coleccionDePartidas = []
          this.coleccionDePartidasSecundaria = []

          this.$bind('coleccionDePartidas', partidas.where('retador', '==', this.user.uid))
          this.$bind('coleccionDePartidasSecundaria', partidas.where('contricante', '==', this.user.uid))
        }
      }
    }
  },

  mounted () {
    this.user = Auth.getUser()
    console.log(this.$route.params.vista)
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
/*
body {
  background-image: url("../../assets/wall1.jpg") !important;

  background-size: 100%;
}

.partida {
  background-color: whitesmoke;
}
*/
</style>
