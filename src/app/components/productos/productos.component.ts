import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  @Input() productos: string[] = [];
  @Input() nombre: string = "";
  @Output() envioTexto: EventEmitter<string>;

  constructor(){
    this.envioTexto = new EventEmitter;
  }

  
  cargarTexto($event:any){
    let texto = $event.target.value;
    this.envioTexto.emit(texto)
  }

}
