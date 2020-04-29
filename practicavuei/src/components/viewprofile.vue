<template src="./recursos/html/viewProfile.html">
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser(),
      displayName: '',
      photoURL: '',
      phoneNumber: ''
    }
  },

  mounted () {
    this.usuario = Auth.checkUser()

    this.displayName = this.usuario.displayName
    this.photoURL = this.usuario.photoURL
    this.phoneNumber = this.usuario.phoneNumber
  },

  methods: {
    login () {
      Auth.login(this.usuario)
    },

    updateData () {
      this.usuario.updateProfile({
        displayName: this.displayName,
        photoURL: this.photoURL,
        phoneNumber: this.phoneNumber
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
  @import "./recursos/css/master.scss"
</style>
