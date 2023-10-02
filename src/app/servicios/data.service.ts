import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  habitaciones: any[] = [];
  reservaInfo: string = '';

  constructor() {
    // Aquí debes inicializar las habitaciones y la información de reserva
  }

  getHabitaciones() {
    return this.habitaciones;
  }

  reservarHabitacion(habitacion: any) {
    // Implementa la lógica para gestionar la reserva aquí
    this.reservaInfo = `Has reservado la habitación ${habitacion.nombre}. ¡Disfruta tu estancia!`;
  }

  getReservaInfo() {
    return this.reservaInfo;
  }
}
