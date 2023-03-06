import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  activo: boolean = false;
miClase: string = 'fondoAzul';
cambiarClase(){
  this.activo = !this.activo;
}

}
