import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HabitacionesComponent } from './compenentes/habitaciones/habitaciones.component';
import { ReservaComponent } from './compenentes/reserva/reserva.component';

const routes: Routes = [
  { path: '', component: HabitacionesComponent },
  { path: 'reserva', component: ReservaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
