<template>
<div>
     <div v-for="partida in coleccionDePartidas" :key="partida.id">
         <Arena
            :partida="partida"
            :uid="user.uid"
            ></Arena>
     </div>
     <div v-for="partida in coleccionDePartidasSecundaria" :key="partida.id">
         <Arena
            :partida="partida"
            :uid="user.uid"
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
      // se usan dos variables ddiferentes por no existir operandos logicos en FireBase, solo de comparacion
      coleccionDePartidas: [],
      coleccionDePartidasSecundaria: [], // variable de ayuda
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
        if (value.vista === 'abiertas') { // para cargar las partidas disponibles para jugar
          this.coleccionDePartidas = []
          this.coleccionDePartidasSecundaria = []
          // limpio la base de datos para evitar fitltracion de datos

          this.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
        }
        if (value.vista === 'misSalas') { // para cargar las partidas hechas por el usaurio
          this.coleccionDePartidas = []
          this.coleccionDePartidasSecundaria = []
          // limpio la base de datos para evitar fitltracion de datos

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
