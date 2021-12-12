import { Component } from '@angular/core';
import { AsistentesService } from './services/asistentes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pruebaGearElectricFrontend';
  public numberAttendees = 0

  constructor(private asistentesService: AsistentesService) {
    this.asistentesService.getAllAsistentes()
      .subscribe((data: any) => {
        this.numberAttendees = data.length
      })
  }
}
