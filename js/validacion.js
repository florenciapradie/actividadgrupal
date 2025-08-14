
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  document.getElementById("alert-danger").classList.remove("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  document.getElementById("alert-success").classList.remove("show");
}


document.getElementById("regBtn").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("password2").value;
  const terminos = document.getElementById("terminos").checked;


  if (nombre === "" || apellido === "" || email === "" || pass1 === "" || pass2 === "") {
    showAlertError();
    return;
  }

 
  if (pass1.length < 6) {
    showAlertError();
    return;
  }

 
  if (pass1 !== pass2) {
    showAlertError();
    return;
  }

 
  if (!terminos) {
    showAlertError();
    return;
  }

  
  showAlertSuccess();
});
