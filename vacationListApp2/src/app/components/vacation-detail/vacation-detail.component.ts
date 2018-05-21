import { Component, OnInit } from '@angular/core';
import { VacationSpotsService } from '../../services/vacation-spots.service';
import { VacationSpot } from '../../domains/vacation-spot';

@Component({
  selector: 'vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: ['./vacation-detail.component.css']
})

export class VacationDetailComponent implements OnInit {
  vacationDetail: VacationSpot;

  constructor(private vacationSpotsService: VacationSpotsService) { }

  ngOnInit() { //where you subscribe to your observables
    this.vacationSpotsService.activeVacation.subscribe(activeVacation => {
      this.vacationDetail = activeVacation;
    });
  }

}
