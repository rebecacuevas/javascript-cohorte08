// las variables que se conectan al DOM llevan por delante un $

// let $title = document.getElementById("title");
// title.textContent = 'Titulo escrito desde JS';


//getElementbyId devuelve elementos
// getElementbyClassName, byName and byTagName devuelven arreglos 

// querySelector
// document.querySelector('.className')
// document.querySelector('#id')
// document.querySelector('tag')

let $title = document.querySelector('#title');
$title.textContent = 'Titulo escrito desde JS';

let $paragraph = document.querySelector('p');
console.log($paragraph.textContent);

// querySelectorAll seleccionna todos los elementos que comparten la misma etiqueta
let $paragraphs = document.querySelectorAll('p');
// forma para acceder a la información que almacena el arreglo 
console.log($paragraphs[1].textContent);

// Crear elementos HTML desde JS
// Este elemento no estará insertado en el HTML doc, solo estará en memoria
// Esto nos da la habilidad de modificarlo antes de insertarlo en el DOM

// Lo creamos 
let subtitle = document.createElement('h3');

// Lo modificamos 
subtitle.textContent = 'Este es un subtítulo desde JS';

// Lo insertamos
// document nos permite acceder a la página web
// .body nos lleva a esa parte del documento
// .append() inserta el elemento al final del documento 

// APPEND
// document.body.append(subtitle);

// ADJCENT ELEMENT
// .body tener cuidado porque lo insertaría afuera de
// document.body.insertAdjacentElement("", subtitle);

// manera correcta para este caso 
// trabajamos a nivel de hermanos 
$title.insertAdjacentElement("afterend", subtitle);

// eliminar elemento
// en realidad se ocultan, no se borran
// $title.remove();


let $content = document.querySelector('#content');
// nos devuelve texto
// solo podemos escribir texto

// console.log($content.textContent = 'hola');

// INNER HTML
// nos devuelve todo el contenido
// nos permite insertar texto y código HTML
// el código original será reemplazado por lo que escribamos entre comillas 
// afecta solo el contenido de la etiqueta
// modifica los hijos

// console.log($content.innerHTML = '<hr>');

// OUTER HTML
// afecta toda la etiqueta
// lo que escribamos entre comillas reemplazará a todo el elemento 
// modifica padre e hijos

// console.log($content.outerHTML = 'Hola');


let paragraphContent = document.createElement('p');
paragraphContent.textContent = 'Contenido nuevo';
// APPEND CHILD
// para agregar contenido como hijo final del elementp
$content.appendChild(paragraphContent);





