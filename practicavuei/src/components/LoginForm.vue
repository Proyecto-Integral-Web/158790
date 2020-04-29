<template src="./recursos/html/loginForm.html"></template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/alerts.vue'

export default {
  name: 'LoginForm',
  components: {
    AlertsComponent
  },

  data () {
    return {
      hasErrors: false,
      errMessage: '',
      usuario: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
  },

  methods: {
    login () {
      Auth.login(this.usuario)
        .catch((error) => {
          console.log(error.code + ':' + error.message)
          this.hasErrors = true
          this.errMessage = error.message
        })
    }
  }
}
</script>

<style lang="scss">
  @import "./recursos/css/master.scss"
</style>
