<template src="../recursos/html/juegos/juegoPiedras.html">
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['userOpcion', 'displayName', 'turnoTerminado', 'mostrarOpcionesJugador'],

  data () {
    return {
      options: {
        t: '✂️',
        pp: '🧻',
        p: '💎'
      }
    }
  },
  methods: {
    select (key) {
      if (!this.turnoTerminado) {
        this.userOpcion = key
      }
    },
    terminar () { // para emitir y bloquear la opcion escogida del usuairo
      if (this.userOpcion !== '') { // auqi preguntamos si no ha finalizado su turno
        this.$emit('terminar', [this.userOpcion, this.displayName]) // aqui enviamos quien y que opcion escogio
        this.turnoTerminado = true
      }
    }
  }
}
</script>

<style lang="scss">
 @import "../recursos/css/juegos/opciones.scss"
</style>
