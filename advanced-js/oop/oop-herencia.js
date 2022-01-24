class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodos
    atacar(){
        return console.log(`${this.nombre} está atacando`);
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        //hace referencia al constructor padre 
        super(nombre, tipo);
        this.edad = edad;
    }

    //metodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`)
    }
}

class Electrico extends Pikachu {
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color = color;
    }
}


const Pikachu1 = new Pikachu("Juan", "Eléctrico", 3);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego");
Pokemon1.atacar();

const Electrico1 = new Electrico("Pancho", "Eléctrico", 4, "gris");
console.log(Electrico1);
