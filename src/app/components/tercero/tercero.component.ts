import { Component } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent {
  nombre: string = "";
  apellido: string = "";
  arrPersonas: any[] = [];

  guardar(): void { //Recuerda que el flujo va lineal para abajo. 1º creamos la persona, 2º añadimos la persona, 3º limpiamos el formulario.
    let persona = {
      nombre: this.nombre,
      apellido: this.apellido
  }

  this.arrPersonas.push(persona);
  console.log(this.arrPersonas)
  this.nombre = "";// Al final de la función guardar() metemos las propiedades vacías para limpiar los campos del formulario.
  this.apellido = "";
  }

  constructor() { 
    this.arrPersonas = [
      {nombre: "Julia", apellido: "Perez"},
      {nombre: "Juan", apellido: "Gomez"}
      
    ]
  }

  

}
