<template>
  <div class="about">
    <h1>This is an {{$route.name}} page</h1>
    <input type="button" value="Cerrrar Sessión" @click="logOut" class="btn btn-danger" />
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
