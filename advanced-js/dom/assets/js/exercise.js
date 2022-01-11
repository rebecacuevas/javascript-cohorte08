let nom = document.getElementById("name");

function changeName() {
    let newName = window.prompt();
    nom.textContent = "¡Hola, " + newName + "!";
}