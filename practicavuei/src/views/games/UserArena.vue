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
      @opcion="partida.participantes[0] === user.uid ? getOpcion: ''"
      :userOpcion="partida.usuario_1"
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
      :displayName="!partida.names[1]?'Esperando Retador':partida.names[1]"
      :userOpcion="partida.usuario_1 != '' ? partida.usuario_2: '' "
      @opcion="partida.participantes[1] === user.uid ? getOpcion: '' "
    ></UserArena>
    {{partida}}
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
		this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted() {
this.user = Auth.getUser()
  },
  methods: {
    crearPartida () {
		this.user = Auth.getUser()
		let uid = this.user.uid

      FireApp.firestore().collection('juego1').doc('partida').set({
       participantes: [uid],
        'usuario_2': '',
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
 'ganador': '',
usuario_1: '',
usuario_2: '',
ganador: ''
      })
    },
    obtenerPartida () {
      FireApp.firestore().collection('juego1').doc(this.partida).get()
        .then((result) => {
          console.log(result.data())
        })
    },
    getOpction (opcion) {
let participantes = this.partida.participantes
'usuario_1': opcion
console.log(participantes.indexOf(this.user.uid))
})
let data = {}
if (participantes.indexOf(this.user.uid) === 0) {
data = {
'usuario_1': opcion
}
} else {
 data = {
'usuario_2': opcion
}
}
fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(data)
}
  }
}
</script>

<style lang="scss">
body {
  background-image: url("../assets/wall1.jpg") !important;

  background-size: 100%;
}

.partida {
  background-color: whitesmoke;
}
</style>
