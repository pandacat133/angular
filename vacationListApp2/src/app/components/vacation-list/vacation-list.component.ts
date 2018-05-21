import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VacationSpotsService } from '../../services/vacation-spots.service';

import { VacationSpot } from '../../domains/vacation-spot';

@Component({
    selector: 'app-vacation-list',
    templateUrl: './vacation-list.component.html',
    styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent implements OnInit {
    vacations: VacationSpot[];
    // Use filterCharacters for template binding in sidenav
    filteredVacations: VacationSpot[];
    vacationFC = new FormControl('');
    hideDetails = false;

    constructor(private vacationSpotsService: VacationSpotsService) {}

    ngOnInit() {
        this.vacations = this.vacationSpotsService.vacationSpots;
        this.filteredVacations = this.vacationSpotsService.vacationSpots;

        this.vacationFC.valueChanges.subscribe(value => {
            if (!value) {
                this.filteredVacations = this.vacations;
                return;
            }

            this.filteredVacations = this.vacations.filter(vacation => {
                return vacation.locationName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
            });
        });
    }

    hideDetailsFn() {
        this.hideDetails = !this.hideDetails;
    }

    setActiveVacation(activeVacation: VacationSpot) {
        this.vacationSpotsService.activeVacation.next(activeVacation);
    }
}
