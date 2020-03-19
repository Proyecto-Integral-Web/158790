import fireApp from './_firebase'
import router from '@/router'

export default {
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('Todos los campos son obligatorios')
    }

    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }

        fireApp.auth().updateCurrentUser(newUser)
          .catch(err => console.table(err))
        router.push('about')
      })
      .catch((err) => {
        return Promise.reject(err)
      })

    console.log(data)
  },

  updateUser (data) {
    let newUser = {
      displayName: data.displayName,
      email: data.email,
      photoURL: data.photoURL,
      phoneNumber: data.phoneNumber
    }

    fireApp.auth().updateCurrentUser(newUser)
      .catch((err) => console.table(err))
    router.push('about')
  },

  async login (data) {
    await fireApp.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        console.log(result)
        router.push('about')
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },

  checkUser () {
    let user = fireApp.auth().currentUser

    if (user) {
      return user
    }

    return null
  },

  logOut () {
    fireApp.auth().signOut()
    router.push({
      name: 'login'
    })
  },

  getUser () {
    return fireApp.auth().currentUser
  }
}
