let title = document.getElementById("title");

title.textContent = "Este texto está escrito desde JS";

console.log(title.textContent);

let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

// Cambiar un elemento de un tipo de etiqueta 
// paragraph[0].textContent = "Este parrafo está escrito desde JS";

// Cambiar cada elemento de un tipo de etiqueta
// for(let i = 0; i < paragraph.length; i++) {
//     paragraph[i].textContent = "Parrafo " + i + "escritos desde JS";
// }

let email = document.getElementById("email");
let password = document.getElementById("password");


function getInformation() {
    console.log(email.value);
    console.log(password.value);
}



