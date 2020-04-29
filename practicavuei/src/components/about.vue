<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Nombre: {{usuario.displayName}}</h3>

      <div class="fotoPerfil"><img
          :src="usuario.photoURL ||'../assets/logo.png'"
          class="fotoPerfil"
        /></div>
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

    }
  }
}
</script>

<style lang="scss">
.fotoPerfil {
  width: 90%;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 10px;
}

@import "./recursos/css/master.scss"
</style>
