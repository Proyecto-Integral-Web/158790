<template>
  <div class="home p-3">
    <div class="row">
      <div class="col col-4"></div>
      <div class="col col-4">
        <LoginForm></LoginForm>
      </div>
      <div class="col col-4"></div>
    </div>

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
