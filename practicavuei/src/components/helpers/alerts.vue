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
  props: ['error', 'message']
}
</script>

<style lang="scss">
</style>
