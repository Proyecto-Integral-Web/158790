<template src="./recursos/html/signUp.html">
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/alerts.vue'

export default {
  name: 'SignUpForm',
  components: {
    AlertsComponent
  },

  data () {
    return {
      hasErrors: false,
      errMessage: '',
      usuario: {
        email: '',
        password: '',
        nombre: ''
      }
    }
  },

  methods: {
    signUp () {
      Auth.signUp(this.usuario)

      this.$router.push({ name: 'about' })
    },

    login () {
      console.log(this.usuario)
    }
  }
}
</script>

<style lang="scss">
@import "./recursos/css/master.scss"
</style>
