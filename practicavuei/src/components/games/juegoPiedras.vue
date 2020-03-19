<template>
  <section>
    <div class="container-fluid pb-5">
      <div class="row">
        <h3 class="mx-auto">{{displayName}}</h3>
      </div>
      <div class="row">
        <div class="col-3 mx-auto">
          <h1>✂️</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mx-auto opciones">
          <div class="row">
            <div
              class="col col-sm-4 opcion p-3"
              v-for="(option, key) in options"
              :key="key"
              @click="select(key)"
            >
              {{option}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['userOpcion', 'displayName'],

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
