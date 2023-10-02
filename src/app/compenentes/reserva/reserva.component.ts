import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  reservaInfo: string = '';

  constructor(private dataService: DataService) {
    this.reservaInfo = this.dataService.getReservaInfo();
  }
}
