import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dato: string = "";
  listaProductos: string[] = [];
  nombre: string = "Julia";
  constructor() {
    this.listaProductos = ['Ordenador', 'Ratón', 'Teclado', 'Disco duro']
  }

  mostrarTexto($event:string){
    this.dato = $event;
  }
}
