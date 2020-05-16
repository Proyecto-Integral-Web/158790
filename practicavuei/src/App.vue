<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link :to="{name: 'profile'}"> Perfil</router-link> |
      <router-link to="/sala/CrearPartida"> Crear</router-link> |
      <router-link to="/partidas/abiertas"> Salas abiertas</router-link> |
      <router-link to="/partidas/misSalas"> Mis partidas</router-link> |
      <router-link :to="{name: 'about'}"> Salir</router-link>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

body {
  background-image: url("assets/Login.jpg") !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #E7A99A;
    }
  }
}
</style>
