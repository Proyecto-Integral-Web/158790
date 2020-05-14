<template>
  <div class="about"><br><br><br><br><br><br><br><br>
    <h6>Para cerrar sesión pulse el botón rojo.</h6>
    <input type="button" value="Cerrar Sesión" @click="logOut" class="btn btn-danger" />
  </div>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'About',

  methods: {
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>
