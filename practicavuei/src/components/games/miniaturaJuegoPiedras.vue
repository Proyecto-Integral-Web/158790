<template>
  <section class="partida">
    <div class="container-fluid pb-5">
      <div class="row">
        <h3 class="mx-auto">{{contricante}}</h3>
      </div>
      <div class="col">
        <div class="col-3 mx-auto">
          <h1>{{options[usarioOpcion]}}</h1>
        </div>
      </div>
      <div class="col">
        <div class="col-3 mx-auto">
          <h1>{{options[contricanteOpcion]}}</h1>
        </div>
      </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['usarioOpcion', 'contricante', 'contricanteOpcion'],

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
