<template>
  <div class="home">
    <h1> BIENVENIDOS </h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="js">
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
