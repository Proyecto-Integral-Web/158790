<template>
  <section class="home p-5">
    <UserArena
      v-if="!names"
      @terminar="finalizarTurno"
      :userOpcion="(partida.retador === this.user.uid) ? partida.usuario_1: (partida.usuario_1 && partida.usuario_2) ? partida.usuario_1: ''"
      :turnoTerminado="partida.usuario_1"
      :displayName="(partida.retador === this.user.uid) ? this.user.displayName: partida.names[0]"
      :mostrarOpcionesJugador="partida.retador === this.user.uid"
    ></UserArena>
    <input
      type="button"
      class="btn btn-outline-primary"
      value="👾"
      @click="retar"
      v-if="!partida.names[1] && (partida.retador != this.user.uid)"
    >
    <UserArena
      v-if="partida.names[1] && partida.retador"
      :turnoTerminado="partida.usuario_2"
      :displayName="(partida.contricante === this.user.uid) ? this.user.displayName: partida.names[1]"
      :userOpcion="(partida.contricante === this.user.uid) ? partida.usuario_2 : (partida.usuario_1 && partida.usuario_2) ? (partida.usuario_1 != '') ? partida.usuario_2: '': ''"
      :mostrarOpcionesJugador="partida.contricante === this.user.uid"
      @terminar="finalizarTurno"
    ></UserArena>
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
    next(vm => {
      vm.user = Auth.getUser()

      if (to.params.no_partida === 'CrearPartida') {
        vm.crearPartida()
      } else {
        vm.$bind('partida', partida.doc(to.params.no_partida))
      }
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

      var partida = {
        abierta: true,
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        retador: uid,
        contricante: '',
        usuario_1: '',
        usuario_2: '',
        ganador: ''
      }
      let partidaBD = FireApp.firestore().collection('juego1')

      FireApp.firestore().collection('juego1').add(partida)
        .then(res => {
          this.$route.params.no_partida = res.id
          this.$bind('partida', partidaBD.doc(res.id))
        })

      return partida
    },

    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.contricante = this.user.uid
      this.partida.abierta = false

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida)
    },

    obtenerPartida () {
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).get()
        .then((result) => {})
    },

    verificarGanador () {
      let retador = this.partida.usuario_1
      let contricante = this.partida.usuario_2

      var data = {}

      if (!retador && !contricante) {
        return 0
      }

      if (retador === contricante) {
        data = {
          ganador: 'Empate'
        }
      } else if ((retador === 't' && contricante === 'pp') || (retador === 'pp' && contricante === 'p') || (retador === 'p' && contricante === 't')) {
        data = {
          ganador: this.partida.conricante
        }
      } else {
        data = {
          ganador: this.partida.retador
        }
      }

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
    },

    finalizarTurno (quien) {
      let participantes = [this.partida.retador, this.partida.contricante]
      console.log(quien)

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
        .then(res => {
          this.verificarGanador()
        })
    }
  }
}
</script>

<style lang="scss">

</style>
