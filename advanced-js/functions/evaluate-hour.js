/* 
Good morning 6-11
Good afternoon 12-18
Good night 19-23
Let me sleep 0-5 
*/

let hour = parseInt(prompt("¿Qué hora es?"));

if(hour >= 6 && hour <= 11) {
    document.write("Buenos días, alegría. Buenos días, Señor Sol.")
} if(hour >= 12 && hour <= 18) {
     document.write("Buenos días... tardes ya.")
} if(hour >= 19 && hour <= 23) {
    document.write("Buenas tardes... noches ya.")
} if(hour >= 0 && hour <= 5) {
    document.write("Dejen dormir al prójimo.")
} if (hour >= 25) {
    document.write("Hora no válida.")
}



