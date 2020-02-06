<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Iniciar sesion</h3>
      <div class="contenEntrada">
        <p>Nombre de usuario</p>
        <input
          type="text"
          placeholder="Olivia Johnson"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <p>Contraseña</p>
        <input
          type="password"
          placeholder="*******"
          class="form-control"
        />
      </div>
      <p>¿Contraseña olvidada? <a href="#">Reiniciala aquí</a></p>
      <input
        type="button"
        value="Entrar"
        class="btn btn-block btn-rosa"
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

<script lamg="js">
export default {
  name: 'LoginForm'
}
</script>

<script lang="scss">
.btn-rosa {
  background-color: purple;
  color: whitesmoke;
  &:hover {
    background: rgb(71, 3, 73);
  }
}

.contBloque {
  border-radius: 15px;
  background-color: #222;
  colro: whitesmoke;
  margin: 15px;
}

body {
  background-color: #090909;
}
</script>
