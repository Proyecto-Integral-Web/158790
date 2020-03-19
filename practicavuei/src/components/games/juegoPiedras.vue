<template>
  <section>
    <div class="container-fluid pb-5">
      <div class="row">
        <h3 class="mx-auto">{{displayName}}</h3>
      </div>
      <div class="row">
        <div class="col-3 mx-auto">
          <h1>{{options[userOpcion]}}</h1>
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
      this.$emit('opcion', key)
    }
  }
}
</script>

<style lang="scss">
.partida {
  background-color: whitesmoke !important;
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
