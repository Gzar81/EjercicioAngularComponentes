import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  color: string = 'blue';
  size: number = 16;

  cambiarSize($event: any){
    this.size = $event.target.value;
  }
  cambiarColor($event: any){
    this.color = $event.target.value;
  }

}
