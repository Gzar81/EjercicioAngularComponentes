import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent {
  numero: number = 0;
  color: string = "";
  frase: string = "No vivo en ninguna ciudad"//Si lo dejásemos vacío, nada más cargar la web, como aún no se ha producido el evento, no aparecería la frase de cuando no está seleccionada ninguna ciudad.

  add(): void{
    this.numero++;
  }
  remove(): void{
    this.numero <=0?this.numero = 0 : this.numero--;
  }

  cargarColor($event: any): void {
    this.color ="background-color:" + $event.target.value;

  }

  cargarCiudad($event: any): void{
    let ciudad = $event.target.value;
    this.frase = (ciudad ==="")? "No vivo en ninguna ciudad" : `Vivo en ${ciudad.toUpperCase()}`

  }

}
