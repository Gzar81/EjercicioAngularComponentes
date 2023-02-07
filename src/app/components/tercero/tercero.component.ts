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

  guardar(): void {
    let persona = {
      nombre: this.nombre,
      apellido: this.apellido
  }

  this.arrPersonas.push(persona);
  console.log(this.arrPersonas)
  this.nombre = "";
  this.apellido = "";
  }

  constructor() { 
    this.arrPersonas = [
      {nombre: "Julia", apellido: "Perez"},
      {nombre: "Juan", apellido: "Gomez"}
      
    ]
  }

  

}
