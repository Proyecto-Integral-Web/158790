<template>
  <div class="home p-3">
    <div class="row">
        <viewProfile></viewProfile>
        <about></about>
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
