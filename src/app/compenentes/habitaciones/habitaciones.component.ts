import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {
  habitaciones: any[] = [];

  constructor(private dataService: DataService) {
    this.habitaciones = this.dataService.getHabitaciones();
  }

  reservarHabitacion(habitacion: any) {
    this.dataService.reservarHabitacion(habitacion);
  }
}
