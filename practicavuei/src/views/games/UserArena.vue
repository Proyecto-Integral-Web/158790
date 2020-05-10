<template>
  <section class="home p-5">
    <UserArena
      v-if="!names"
      @terminar="finalizarTurno"
      :userOpcion="(partida.retador === this.user.uid) ? partida.usuario_1: (partida.usuario_1 && partida.usuario_2) ? partida.usuario_1: ''"
      :turnoTerminado="partida.usuario_1_fin"
      :displayName="(partida.retador === this.user.uid) ? 'Escoge sabiamente': partida.names[0]"
    ></UserArena>
    <input
      type="button"
      class="btn btn-outline-primary"
      value="👾"
      @click="retar"
      v-if="!partida.names[1]"
    >
    <UserArena
      v-if="!partidas.contricante"
      :turnoTerminado="partida.usuario_2_fin"
      :displayName="(partida.contricante === this.user.uid) ? 'Elige tu opcion': 'partida.names[1]'"
      :userOpcion="(partida.contricante === this.user.uid) ? partida.usuario_2 : (partida.usuario_1 && partida.usuario_2) ? (partida.usuario_1 != '') ? partida.usuario_2: '': ''"
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
    next(vm => {
      vm.user = Auth.getUser()

      if (to.params.no_partida === 'CrearPartida') {
        // vm.$bind('partida', partida.add(vm.crearPartida()))
        vm.crearPartida()
        console.log('<<<<<<<<<<>>>>>>>>>>')
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
        usuario_2: ''
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
      this.partida.retador = this.user.uid
      this.partida.abierta = false

      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida)
    },

    obtenerPartida () {
      FireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).get()
        .then((result) => {
          // console.log(result.data())
        })
    },

    finalizarTurno (quien) {
      let participantes = [this.partida.retador, this.partida.contricante]

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
