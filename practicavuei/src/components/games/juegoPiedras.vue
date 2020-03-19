<template>
  <section class="contBloque">
    <div class="bloqueOpcion">
      <div
        class="opcionEscogida"
        :class="usuarioActualGano? 'ganador': 'perdedor' "
      ></div>
      <div class="mostrar">
        <input
          type="button"
          value="Piedra"
          class="button"
        />
        <input
          type="button"
          value="Papel"
          class="button"
        />
        <input
          type="button"
          value="Tijeras"
          class="button"
        />
      </div>

    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'sala1',
  props: ['userOpcion'],
  data () {
    return {
      options: {
        t: 'tijeras',
        pp: 'papel',
        p: 'piedra'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', this.key)
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

.contBloque {
  width: 100%;
  height: 500px;

  border-radius: 50px;

  background-color: gray;
}
</style>
