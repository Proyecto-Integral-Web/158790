<template>
  <section class="home p-5">
    <UserArena @opcion=""></UserArena>
  </section>
</template>

<script lang="js">
import UserArena from '@/components/juegos/juegoPiedras'
export default {
  name: 'sala1',
  components: {
    UserArena
  },
  methods: {
    getOpction (opcion) {
      alert(opcion)
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
