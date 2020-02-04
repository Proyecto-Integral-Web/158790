<template>
  <section>
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
      <div>
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
        class="btn btn-success btn-block"
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
</script>
