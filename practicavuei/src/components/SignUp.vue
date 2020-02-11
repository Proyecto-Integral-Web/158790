<template>
  <section class="mb-2">
    <input
      type="button"
      value="cerrar sesión"
      @click="logOff"
      class="btn-salir btn btn-block"
    />
  </section>
</template>

<script lang="js">
export default {
  name: 'SignUp',
  data () {
    return {
      usuario: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    logOff () {
    }
  }
}
</script>

<script lang="scss">
.btn-salir {
  background-color: #f00 !important;
  color: whitesmoke !important;
  &:hover {
    background-color: #00f !important;
  }
}
</script>
