function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Aquí puedes reemplazar con la validación que necesites
    if (username === "Tame" && password === "1234") {
        alert("Bienvenido, " + username + "!");
        errorMessage.style.display = "none";
        // Redireccionar o realizar alguna acción
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }

    return false; // Evita el envío del formulario
}
