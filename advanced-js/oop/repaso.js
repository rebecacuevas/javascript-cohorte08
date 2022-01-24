class Animalito{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
    }
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes++; 
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }

    //usar un metodo dentro de otro metodo
    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados(); //llamar a otro metodo de la misma clase 
            // this.pacientesRevisados++;
            document.write("Paciente ha sido revisado");
        } else {
            document.write("Este paciente ya fue revisado");
        }
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes}<br>Pacientes revisados: ${this.pacientesRevisados}<br>`);
    }
}

//objeto creado de la clase Veterinario
const doctor1 = new Veterinario();

//objetos creados de la clase Animalito
const animalito1 = new Animalito("Dominica", "3", "San Bernardo", false);
const animalito2 = new Animalito("Nutrisa", "10", "gato", true);

console.log(animalito1);
console.log(animalito2);

doctor1.agregarPaciente(animalito1);
doctor1.agregarPaciente(animalito2);

console.log(doctor1.listaPacientes);

doctor1.mostrarLista();

doctor1.revisarPaciente(animalito1);
doctor1.mostrarLista();

doctor1.revisarPaciente(animalito2);