<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <div class="fotoPerfil"><img
          src="usuario.photoURL"
          class="fotoPerfil"
        /></div>
      <input
        type="url"
        placeholder="gravatar.com/userId"
        class="form-control"
        v-model="usuario.photoURL"
      />
      <h3>{{usuario.displayName}}</h3>
      <div class="contenEntrada">
        <p>Correo</p>
        <input
          type="email"
          placeholder="olivia.jhonson@oliv.co.m"
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
          @keypress.enter="updateData"
        />
      </div>
      <div class="contenEntrada">
        <p>Numero telefonico</p>
        <input
          type="number"
          placeholder="(656) 123 4567"
          class="form-control"
          v-model="usuario.phoneNumber"
        />
      </div>
      <input
        type="button"
        value="Actualizar"
        class="btn btn-block btn-rosa"
        @click="updateData"
      />
      <br />
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser()
    }
  },

  mounted () {
    this.usuario = Auth.checkUser()
  },

  methods: {
    login () {
      Auth.login(this.usuario)
    },

    updateData () {
      Auth.updateUser(this.usuario)
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

.contenEntrada {
  margin-bottom: 15px;
}

.fotoPerfil {
  width: 60%;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 10px;
}
body {
  background-image: #090909 !important;

  background-image: url("../assets/wall1.jpg") !important;

  background-size: 100%;
}
</style>
