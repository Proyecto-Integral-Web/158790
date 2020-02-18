<template>
<section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Registrarse</h3>
      <div class="contenEntrada">
        <p>Nombre de usuario</p>
        <input
          type="email"
          placeholder="Correo"
          class="form-control"
          v-model="usuario.nombre"
        />
      </div>
      <div class="contenEntrada">
       <p>Correo electronico</p>
        <input
          type="text"
          placeholder="Nombre"
          class="form-control"
          v-model="usuario.email"
        />
      </div>
      <div class="mb-2">
        <p>Contraseña</p>
        <input
          type="password"
          placeholder="Contraseña"
          class="form-control"
          v-model="usuario.password"
          @keypress.enter="login"
        />
      </div>
      <input
        type="button"
        value="Registrarse"
        class="btn btn-block btn-rosa"
        @click="login"
      />
      <br />
      <input type="checkbox" /> Receurdame
      <div class="contRedesAlternativas">
        <h5>Entra con tus redes sociales</h5>
        <div class="logoRed Face"></div>
        <div class="logoRed Twitter"></div>
      </div>
    </section>
  </section>
</template>

<script lang="js">
export default {
  name: 'SignUpForm',
  data () {
    return {
      usuario: {
        email: '',
        password: '',
        nombre: ''
      }
    }
  },
  methods: {
    logOff () {
    }
  }
}
</script>

<style lang="scss">
.btn-rosa {
  background-color: purple !important;
  color: whitesmoke !important;
  &:hover {
    background: rgb(71, 3, 73) !important;
  }
}

.contBloque {
  border-radius: 15px;
  background-color: #222 !important;
  color: whitesmoke !important;
  margin: 5%;
}

body {
  background-color: #090909 !important;
}
</style>
