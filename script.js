function loginUser(codigo, password) {
    firebase.auth().signInWithEmailAndPassword(codigo, password)
    .then(function (user) {
      console.log('Credenciales correctas, ¡bienvenido! ' + user);
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

function calcularDefinitiva(){


}