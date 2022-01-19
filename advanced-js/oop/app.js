// clases - molde que nos permite crear objetos

// first letter always on uppercase
class World{
    // constructor es una función
    constructor(nombre, idioma){
        this.nombre = nombre;
        this.idioma = idioma;
        // console.log('Este es un constructor');
    }

    // getters and setters
    // su propósito es leer o modificar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getIdioma(){
        return this.idioma;
    }

    set setIdioma(idioma){
        this.idioma = idioma;
    }

    // metodos == función
    presentarse(){
        document.write(`Hola soy ${this.nombre} y mi idioma oficial es ${this.idioma}<br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y mi idioma oficial es ${this.idioma} <br>`;
        return mensaje; 
    }
    
    //metodos estáticos
    // pertenece solo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log("Hola, soy un metodo estático");
    }
}

//OBJECTS
//heredan los atributos y los métodos de la clase que están 
// object first letter always on uppercase
const Country1 = new World("Canadá", "Inglés");
console.log(Country1);

// instanciar == hacer una copia, crear un objecto 
const Country2 = new World("Brasil", "portugués");
console.log(Country2);

Country1.presentarse();
Country2.presentarse();

// asignar nuevo nombre
console.log(Country1.nombre);
Country1.nombre = "Inglaterra"; // notación de punto para cambiar el valor
console.log(Country1.nombre);

document.write(Country1.cambiarNombre("Estados Unidos")); // método para cambiar el valor 

// Getters and Setters
// get - obtener el valor de un atributo
// set - fijar o cambiar el valor de un atributo 

console.log(Country1.getNombre);
Country1.setNombre = "Australia";
console.log(Country1.getNombre);
console.log(Country1);

// los metodos estáticos se llaman con el nombre de la clase y pueden usarse para contar los objetos
World.saludar();
