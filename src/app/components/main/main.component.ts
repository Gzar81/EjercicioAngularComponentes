import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  name: string = "";
  apellidos: string = "";
  url: string = "https://kinsta.com/wp-content/uploads/2022/06/angular-logo.png";
  titulo: string = "Logo de Angular";
  Numero1: number = 3;
  Numero2: number = 12;
  constructor() {

    this.name = 'Gonzalo';
    this.apellidos = 'Atienzar Lara'

  }

}
