import fireApp from './_firebase'

export default {
  signUp (data) {
    if (data.nomre === '' || data.email === '' || data.password === '') {
      return alert('Todos los campos son obligatorios')
    }

    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((resultado) => {
      let newUser = resultado.user.displayName = data.nombre
      fireApp.auth().updateCurrentUser(newUser).catch(error => console.log(error))
    }).catch(error => {

    })

    console.table(data)
  }
}
