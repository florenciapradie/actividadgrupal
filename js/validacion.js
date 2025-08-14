function showAlertSuccess() {
    document.getElementsById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementsById("alert-danger").classList.add("show");

}
function notnull(nombre,apellido,email,password1,password2){
if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
  showAlertError();
  return;
    }
}

function caracteresminimos(password1,password2){
if(password1.length < 6 && password2.length < 6){
    showAlertError();
    return;
    }
}

function passiguales(password1,password2){
    if(password2 != password1){
        showAlertError();
    return;
    }
}

function validarcheckbox(){
    let checkbox = document.getElementsById("terminos");

if(!checkbox.checked){
    showAlertError();
    return;
    }
}

function validarFormulario() {
    let nombre = document.getElementsById("nombre").value.trim();
    let apellido = document.getElementsById("apellido").value.trim();
    let email = document.getElementsById("email").value.trim();
    let pass1 = document.getElemenstById("password1").value;
    let pass2 = document.getElementsById("password2").value;
    let checkbox = document.getElementsById("terminos");

    if (
        notnull(nombre, apellido, email, pass1, pass2) &&
        caracteresMinimos(pass1, pass2) &&
        passIguales(pass1, pass2) &&
        validarCheckbox(checkbox)
    ) {
        showAlertSuccess();
    }
}

