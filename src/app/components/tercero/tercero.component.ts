import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent {
  nombre: string = "";
  apellido: string = "";
  arrPersonas: Persona[] = [];
  contador: number = 3;

  guardar(): void { //Recuerda que el flujo va lineal para abajo. 1º creamos la persona, 2º añadimos la persona, 3º limpiamos el formulario.
    let persona: Persona = {
      id: this.contador,
      name: this.nombre,
      surname: this.apellido
  }

  this.arrPersonas.push(persona);
  console.log(this.arrPersonas)
  this.contador ++;
  this.nombre = "";// Al final de la función guardar() metemos las propiedades vacías para limpiar los campos del formulario.
  this.apellido = "";
  }

  constructor() { 
    this.arrPersonas = [
      {id: 1, name: "Julia", surname: "Perez"},
      {id: 2, name: "Juan", surname: "Gomez"}
      
    ]
  }

  

}
