<template>
  <div class="home p-3">
    <div class="row">
        <about></about>
        <viewProfile></viewProfile>
    </div>

  </div>
</template>

<script lang="js">
import viewProfile from '@/components/viewprofile'
import about from '@/components/about'

export default {
  name: 'profile',
  components: {
    viewProfile,
    about
  }
}
</script>
