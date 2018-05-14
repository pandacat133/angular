import { Component, OnInit } from '@angular/core';

import { VacationSpotsService } from '../../services/vacation-spots.service';
import { VacationSpot } from '../../domains/vacation-spot';

@Component({
    selector: 'app-vacation-spots',
    templateUrl: './vacation-spots.component.html',
    styleUrls: ['./vacation-spots.component.css']
})
export class VacationSpotsComponent implements OnInit {
    vacationSpots: VacationSpot[];

    constructor(
        private vacationSpotsService: VacationSpotsService
    ) { }

    ngOnInit() {
        this.vacationSpots = this.vacationSpotsService.vacationSpots;
    }
}
