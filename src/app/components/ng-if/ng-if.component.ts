import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  mostrar: boolean = false;

  cambiarEstado(){
    this.mostrar = !this.mostrar
  }

}
