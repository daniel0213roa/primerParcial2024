function loginUser(codigo, clave) {
    firebase.auth().signInWithEmailAndPassword(codigo, clave)
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

fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login')


function load() {
  var tablaHTML = "<thead><tr><th >ID</th><th >Asignatura</th><th >Cred</th><th >P1</th><th >P2</th><th >P3</th><th >EF</th><th >DEF</th></tr></thead><tbody>";

  for (let i = 0; i < notas.length; i++) {
      tablaHTML += "<tr><td>" + notas[i].asignatura + "</td>";
      tablaHTML += "<td><a href=" + notas[i].link + ">" + notas[i].asignatura + "</a></td>";
      tablaHTML += "<td>";

      for (let j = 0; j < notas[i].departamento.length; j++) {
          tablaHTML += "<a href=" + notas[i].[j].link + ">" + org.data[i].departamento[j].nombre + "</a><br>";
      }

      tablaHTML += "</td>";
      tablaHTML += "<td>" + org.data[i].tipoContrato + "</td>";
      tablaHTML += "</tr>";
  }

  tablaHTML += "</tbody>";
  var contenedorTabla = document.getElementById("sortabletable");
  contenedorTabla.innerHTML = tablaHTML;
}