import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { FormularioModelComponent } from './components/formulario-model/formulario-model.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EventosComponent,
    ProductosComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    GaleriaComponent,
    NgIfComponent,
    NgStyleComponent,
    NgClassComponent,
    FormularioModelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,          //Formularios normales
    ReactiveFormsModule   //Formularios con control de validaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
