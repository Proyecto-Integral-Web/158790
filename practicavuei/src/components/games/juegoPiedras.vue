<template src="../recursos/html/juegos/juegoPiedras.html">
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['userOpcion', 'displayName', 'turnoTerminado'],

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
    terminar () {
      if (this.userOpcion !== '') {
        this.$emit('terminar', [this.userOpcion, this.displayName])
        this.turnoTerminado = true
      }
    }
  }
}
</script>

<style lang="scss">
 @import "../recursos/css/juegos/opciones.scss"
</style>
