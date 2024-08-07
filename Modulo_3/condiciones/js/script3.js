function verificarPassword() {
    let digito1 = document.getElementById("digito1").value;
    let digito2 = document.getElementById("digito2").value;
    let digito3 = document.getElementById("digito3").value;

    let password = digito1 + digito2 + digito3;

    let mensaje = document.getElementById("mensaje");

    if (password === "911") {
        mensaje.textContent = "password 1 correcto";
    } else if (password === "714") {
        mensaje.textContent = "password 2 correcto";
    } else {
        mensaje.textContent = "password incorrecto";
    }
}
