import { Component } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})// Todo lo que sea una propiedad de clase es susceptible de poderse comunicar con el html. Una variable no puede.
export class PrimeroComponent { 
  nombre: string = "Gonzalo";
  edad: number = 40;
  color: string = "#FFdd00";
  miClase: string = 'verde';
  productos: string[] = ['huevos', 'leche', 'harina']
  foto: string = 'https://upload.wikimedia.org/wikipedia/commons/2/24/Stray_calico_cat_near_Sagami_River-01.jpg'

}
