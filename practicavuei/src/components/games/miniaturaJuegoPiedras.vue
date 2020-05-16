<template src="../recursos/html/juegos/miniaturaPiedras.html">
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['partida', 'uid'], // aqui recivo toda la informacion de la partida para que esta vista se engargue de manejarla

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
  }
}
</script>

<style lang="scss">
@import "../recursos/css/juegos/opciones.scss"
</style>
