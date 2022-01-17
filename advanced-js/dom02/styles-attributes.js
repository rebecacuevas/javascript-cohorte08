let $title = document.querySelector('#title');
let $text = document.querySelector('.text');

// añadir un id a través de JS
$text.id = 'text';

// cambiar estilo desde JS - poco común 
// $text.style = 'color: white; font-size: 24px';

// agregar clases usadas en hoja de estilos al html
$text.className = 'bg-purple';
$title.className = 'h3';

// agregar o eliminar una clase de forma selectiva
// no borra las clases anteriores sobreescribiendolas, solo las añade
// AGREGAR
$text.classList.add('text-center');
// BORRAR
$text.classList.remove('text-center');
$text.classList.remove('bg-purple');
