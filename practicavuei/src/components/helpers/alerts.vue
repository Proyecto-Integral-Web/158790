<template>
  <section v-if="error">
    <div class="alert alert-danger">
      {{message}}
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'AlertComponent',
  props: ['error', 'message', 'code'],
  data () {
    return {
      tipo: 'alert-success'
    }
  },
  mounted () {
    switch (this.code) {
      case 'auth/user-not-found':
        this.tipo = 'alert-danger'
        break
      default:
        break
    }
  }
}
</script>
<style lang="scss">
</style>
