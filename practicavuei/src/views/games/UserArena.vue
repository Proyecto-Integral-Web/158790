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
        this.$bind('partida', partida.doc(value.no_partida)) // aqui cargo en memoria un verificador para ver cambios en tiempo real
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

      var partida = { // crea el objeto partida para configurar sus parametros de manera mas facil
        abierta: true,
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        retador: uid,
        contricante: '',
        usuario_1: '',
        usuario_2: '',
        ganador: ''
      }
      let partidaBD = FireApp.firestore().collection('juego1') // genero un pequeño acortador par amas adelante

      FireApp.firestore().collection('juego1').add(partida)
        .then(res => {
          this.$route.params.no_partida = res.id // modifico el componente interno para observar la partida recien generada
          this.$bind('partida', partidaBD.doc(res.id)) // uso el acortador anterior para cargar en el verificador la partida
        })

      return partida
    },

    retar () { // se encarga de añadir quien quiere jugar
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName) // se encarga de enviar el nombre por si existe
      this.partida.contricante = this.user.uid // para indicar el uid del retador
      this.partida.abierta = false // para poder saber cuales partidas faltan de jugador

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida) // actualiza la partida
    },

    obtenerPartida () { // metodo para obtener la partida en caso de abrir una partida ya hecha
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).get()
        .then((result) => {})
    },

    verificarGanador () { // verifica el ganador de la partida y lo actualiza en la BDD
      let retador = this.partida.usuario_1
      let contricante = this.partida.usuario_2

      var data = {}

      if (!retador && !contricante) {
        return 0
      }

      if (retador === contricante) { // por si hay empate
        data = {
          ganador: 'Empate'
        }
      // obteniendo el ganador por eliminacion de probabilidades
      } else if ((retador === 't' && contricante === 'pp') ||
                  (retador === 'pp' && contricante === 'p') ||
                  (retador === 'p' && contricante === 't')) {
        data = {
          ganador: this.partida.contricante
        }
      } else { // si no gano el contricante solo y no hay empate solo queda que ganara el retador
        data = {
          ganador: this.partida.retador
        }
      }

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data) // se actualiza la BDD
    },

    finalizarTurno (quien) { // para actualizar la BDD con la opcion del jugador
      let participantes = [this.partida.retador, this.partida.contricante]
      console.log(quien)

      if (this.partida.names[participantes.indexOf(this.user.uid)] !== quien[1]) { // verifico si quien escogio es el jugador...
        return 0
      }

      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) { // verifico si escogio en su lugar debido
        data = {
          'usuario_1': quien[0]
        }
      } else { // pero si no es el anterior y escogio no siendo un espectador entonces es el otro quien escogio
        data = {
          'usuario_2': quien[0]
        }
      }

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
        .then(res => {
          this.verificarGanador() // para verificar el ganador y actualizar una vez que existan los datos actualziados ya en la BDD
        })
    }
  }
}
</script>

<style lang="scss">

</style>
