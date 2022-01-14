/*
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un cupón equivocado
*/

let price = parseInt(prompt("¿Cuánto cuesta el artículo?"));
let coupon = (prompt("Ingresa tu cupón: [Bronce, Plata, Oro, Platino]")); 

switch(coupon) {
    case 'Bronce':
        document.write(`El precio del artículo es de $${price} MXN pero con tu cupón ${coupon}, el precio final es de $${price * 0.95} MXN`)
    break;
    case 'Plata':
        document.write(`El precio del artículo es de $${price} MXN pero con tu cupón ${coupon}, el precio final es de $${price * 0.90} MXN`)
    break;
    case "Oro":
        document.write(`El precio del artículo es de $${price} MXN pero con tu cupón ${coupon}, el precio final es de $${price * 0.80} MXN`)
    break;
    case "Platino":
        document.write(`El precio del artículo es de $${price} MXN pero con tu cupón ${coupon}, el precio final es de $1503${price * 0.75} MXN`)
    break;
    default:
        document.write('Tu cupón no es válido');
    break;
}

