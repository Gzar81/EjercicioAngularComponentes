import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  resultado: number = 0;
  operacion: string = "";
  numero1: number = 0;
  numero2: number = 0;
  sumar() {
   this.resultado = this.numero1 + this.numero2
   this.operacion = "la suma"
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2
    this.operacion = "la multiplicación"
  }
}

