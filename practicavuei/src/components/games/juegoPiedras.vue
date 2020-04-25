<template>
  <section class="partida">
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
      <br />
      <br />
      <div class="row">
        <div class="col-6 mx-auto">
          <input type="button" class="btn" @click="terminar" value="Terminar turno" :class="turnoTerminado ? 'btn-danger': 'btn-success'"/>
        </div>
      </div>
    </div>
  </section>
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
