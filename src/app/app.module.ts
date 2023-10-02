import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitacionesComponent } from './compenentes/habitaciones/habitaciones.component';
import { ReservaComponent } from './compenentes/reserva/reserva.component';
import { InicioComponent } from './compenentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    ReservaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
