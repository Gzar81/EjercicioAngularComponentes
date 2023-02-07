import { Component } from '@angular/core';
import { Imagen } from 'src/app/interfaces/imagen.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  arrImagenes: Imagen[] = [];
  imagenActual: number = 0;  

  constructor(){
    this.arrImagenes = [
      {url: "./assets/images/imagen_1.jpg", title: "Título imagen 1"},
      {url: "./assets/images/imagen_2.jpg", title: "Título imagen 2"},
      {url: "./assets/images/imagen_3.jpg", title: "Título imagen 3"},
      {url: "./assets/images/imagen_4.jpg", title: "Título imagen 4"}
    ]
  }
  
  changeImg($event: any){
    if ($event.target.textContent === 'NEXT') {

      this.imagenActual = this.imagenActual === this.arrImagenes.length-1? 0 : this.imagenActual +=1;
    }else {
      this.imagenActual = this.imagenActual === 0? this.imagenActual = this.arrImagenes.length-1 : this.imagenActual-=1;
    }
  }
}
