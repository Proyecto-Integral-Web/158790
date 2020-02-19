import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAqdtUb8fM0IgY0hkgp3_FcDkFnXqSiOMY',
  authDomain: 'matricula-ffe03.firebaseapp.com',
  databaseURL: 'https://matricula-ffe03.firebaseio.com',
  projectId: 'matricula-ffe03',
  storageBucket: 'matricula-ffe03.appspot.com',
  messagingSenderId: '413655456096',
  appId: '1:413655456096:web:963aa96bcc33240e2d6605',
  measurementId: 'G-HH1YRPMXVK'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
