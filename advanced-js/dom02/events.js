let $title = document.querySelector('#title');
let $message = document.querySelector('#message');
let $btnMessage = document.querySelector('#btnMessage');
let $spanError = document.querySelector('span');

// addEventListener 

// usar función anónima o de flecha, da igual 
$btnMessage.addEventListener('click', function() {
    console.log('No me presiones');
});

$message.addEventListener('keydown', (e) => {
    // recupera lo que el usuario escriba
    console.log(e.target.value);

    if(e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
        // console.log('escribiste algo');
    } else {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
});

/* También se puede hacer de la siguiente manera

Escribir la función sin parentesis porque solo queremos hacer referencia a la función, no invocarla

$message.addEventListener('keydown', functionName);  

function mostrarConsole() {
    console.log('escribiste algo');
}
*/ 