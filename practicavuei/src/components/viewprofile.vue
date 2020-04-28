<template src="./recursos/html/viewProfile.html">
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser()
    }
  },

  mounted () {
    this.usuario = Auth.checkUser()
  },

  methods: {
    login () {
      Auth.login(this.usuario)
    },

    updateData () {
      this.usuario.updateProfile({
        displayName: this.usuario.displayName,
        photoURL: this.usuario.photoURL,
        phoneNumber: this.usuario.phoneNumber
      }).then(() => {
        console.log('Logrado')
      }).catch(() => {
        console.log('Un error inesperado... o mo tanto')
      })
    }
  }
}
</script>

<style lang="scss">
  @import "./recursos/css/master.css"
</style>
