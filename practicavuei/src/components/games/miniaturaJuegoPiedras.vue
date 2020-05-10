<template src="../recursos/html/juegos/miniaturaPiedras.html">
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['partida'],

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
.partida {
  border-radius: 25px;

  color: #AAA;

  background-color: rgba(25, 25, 25, 0.9) !important;
}

.contBloque {
  width: 100%;
  height: 500px;

  border-radius: 50px;

  background-color: gray;
}

.opciones {
  background: grey;
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
  }
}
</style>
