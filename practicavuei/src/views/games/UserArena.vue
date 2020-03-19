<template>
  <section class="home p-5">
    <input
      value="Iniciar Partida"
      type="button"
      class="btn btn-success"
      @click="iniciarPartida"
    />
    <!-- <UserArena @opcion=""></UserArena>-->
    <UserArena
      @opcion="getOpcion"
      :userOpcion="partida.usuario_1"
    ></UserArena>
    {{partida}}
  </section>
</template>

<script lang="js">
import UserArena from '@/components/games/juegoPiedras'
import FireApp from '@/config/_firebase.js'

const partida = FireApp.firestore().collection('juego1')

export default {
  name: 'sala1',
  props: ['user_opcion'],
  components: {
    UserArena
  },
  data () {
    return {
      partida: {},
      partidas: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.obtenerPartida(to.route.params.no_partida)
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
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  methods: {
    crearPartida () {
      FireApp.firestore().collection('juego1').doc('partida').set({
        'usuario_1': '',
        'seleccionUsuario_1': '',
        'usuario_2': '',
        'seleccionUsuario_2': '',
        'ganador': ''
      })
    },
    obtenerPartida () {
      FireApp.firestore().collection('juego1').doc(this.partida).get()
        .then((result) => {
          console.log(result.data())
        })
    },
    getOpction (opcion) {
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update({
        'seleccionUsuario_1': opcion
      })
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
