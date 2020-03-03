<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Iniciar sesion</h3>
      <AlertsComponent
        :error="hasErrors"
        :message="errMessage"
      >

      </AlertsComponent>
      <div class="contenEntrada">
        <p>Correo</p>
        <input
          type="email"
          placeholder="olivia.jhonson@oliv.co.m"
          class="form-control"
          v-model="usuario.email"
          @keypress="hasErrors = false"
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
      <p>¿Contraseña olvidada? <router-link
          :to="{name: 'SignUp'}"
          :class="$route.name=='about'?'btn':''"
        >Reiniciala aquí</router-link>
      </p>
      <input
        type="button"
        value="Entrar"
        class="btn btn-block btn-rosa"
        @click="login"
      />
      <br />
      <input type="checkbox" /> Receurdame
      <div class="contRedesAlternativas">
        <h5>
          <router-link
            :to="{name: 'SignUp'}"
            :class="$route.name=='SignUp'?'btn':''"
          >¡¡¡Registrate!!!</router-link>
        </h5>
        <div class="logoRed Face"></div>
        <div class="logoRed Twitter"></div>
      </div>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/alerts.vue'

export default {
  name: 'LoginForm',
  components: {
    AlertsComponent
  },

  data () {
    return {
      hasErrors: false,
      errMessage: '',
      usuario: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
  },

  methods: {
    login () {
      Auth.login(this.usuario)
        .catch((error) => {
          console.log(error.code + ':' + error.message)
          this.hasErrors = true
          this.errMessage = error.message
        })
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
  background-image: #090909 !important;

  background-image: url("../assets/wall1.jpg") !important;

  background-size: 100%;
}
</style>
