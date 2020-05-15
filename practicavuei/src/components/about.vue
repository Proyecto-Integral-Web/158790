<template>
  <section class="contBloquePerfil">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col colPerfil">
      <!--<h3>Nombre: {{usuario.displayName}}</h3>-->
      <div class="fotoPerfil"><img
          :src="usuario.photoURL || require('../assets/user.png')"
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
      Auth.login(this.usuario) // para hacer login al usuairo y mantener la sesion abierta
    },
    updateData () {

    }
  }
}
</script>

<style lang="scss">
@import "./recursos/css/master.scss"
</style>
