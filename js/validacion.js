function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function notnull(nombre, apellido, email, passworf1, password2) {
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
        showAlertError();
        return false;
    }
    return true;
}

function caracteresminimos(password1, password2) {
    if (password1.length < 6 || password2.length < 6) { 
        showAlertError();
        return false;
    }
    return true;
}

function passiguales(password1, password2) {
    if (password2 != password1) { 
        showAlertError();
        return false;
    }
    return true;
}

function validarcheckbox(checkbox) {
    if (!checkbox.checked) {
        showAlertError();
        return false;
    }
    return true;
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    let checkbox = document.getElementById("terminos");

    if (
        notnull(nombre, apellido, email, password1, password2) &&
        caracteresminimos(password1, password2) &&
        passiguales(password1, password2) &&
        validarcheckbox(checkbox)
    ) {
        showAlertSuccess();
    }
}
