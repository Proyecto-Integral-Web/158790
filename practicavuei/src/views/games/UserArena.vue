<template>
  <section class="home p-5">
    <input
      value="Iniciar Partida"
      type="button"
      class="btn btn-success"
      @click="crearPartida"
    />
    <!-- <UserArena @opcion="" :userOpcion="partida.usuario_1"></UserArena>-->
    <UserArena
      v-if="!names"
      @terminar="finalizarTurno"
      :userOpcion="(partida.participantes[0] === this.user.uid) ? partida.usuario_1: (partida.usuario_1 && partida.usuario_2) ? partida.usuario_1: ''"
      :turnoTerminado="partida.usuario_1_fin"
      :displayName="!user.displayName ? partida.names[0] !== user.displayName ? partida.names[0] : '' : user.displayName"
    ></UserArena>
    <input
      type="button"
      class="btn btn-outline-primary"
      text="👾"
      @click="retar"
      v-if="!partida.names[1]"
    >
    <UserArena
      v-if="!names"
      :turnoTerminado="partida.usuario_2_fin"
      :displayName="!partida.names[1] ? 'Esperando Retador': partida.names[1]"
      :userOpcion="(partida.participantes[1] === this.user.uid) ? partida.usuario_2 : (partida.usuario_1 && partida.usuario_2) ? (partida.usuario_1 != '') ? partida.usuario_2: '': ''"
      @terminar="finalizarTurno"
    ></UserArena>
    <!--{{partida}}-->
  </section>
</template>

<script lang="js">
import UserArena from '@/components/games/juegoPiedras'
import FireApp from '@/config/_firebase.js'
import Auth from '@/config/auth'

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
      partidas: [],
      user: {}
    }
  },

  beforeRouteEnter (to, from, next) {
    // console.log(partida)
    next(vm => {
      vm.user = Auth.getUser()

      // vm.crearPartida()

      vm.$bind('partida', partida.doc(to.params.no_partida))

      // vm.$bind('partida', partida.doc('partida'))
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
        this.$bind('partida', partida.doc(value.no_partida))
        // this.$bind('partida', partida.doc('partida'))
      }
    }
  },

  mounted () {
    this.user = Auth.getUser()
  },

  methods: {
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).set({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario_1: '',
        usuario_2: ''
      })
    },

    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida)
    },

    obtenerPartida () {
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).get()
        .then((result) => {
          // console.log(result.data())
        })
    },

    getOpcion (opcion) {
      let participantes = this.partida.participantes

      if (this.partida.names[participantes.indexOf(this.user.uid)] !== opcion[1]) {
        return 0
      }

      console.log(opcion)
      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion[0]
        }
      } else {
        data = {
          'usuario_2': opcion[0]
        }
      }

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
    },

    finalizarTurno (quien) {
      let participantes = this.partida.participantes

      if (this.partida.names[participantes.indexOf(this.user.uid)] !== quien[1]) {
        return 0
      }

      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': quien[0]
        }
      } else {
        data = {
          'usuario_2': quien[0]
        }
      }

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
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
