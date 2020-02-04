<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Iniciar sesion</h3>
      <div class="contenEntrada">
        <p>Nombre de usuario</p>
        <input
          type="text"
          placeholder="Olivia Johnson"
        />
      </div>
      <div>
        <p>Contraseña</p>
        <input
          type="password"
          placeholder="*******"
        />
      </div>
      <p>¿Contraseña olvidada? <a>Reiniciala aquí</a></p>
      <input
        type="button"
        placeholder="Entrar"
      />
      <input
        type="checkbox"
        placeholder="Recuerdame"
      />
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
  name: "LoginForm"
};
</script>

<script lang="scss">
</script>
