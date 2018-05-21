import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'vacation-rating',
    templateUrl: './vacation-rating.component.html',
    styleUrls: ['./vacation-rating.component.css']
})
export class VacationRatingComponent implements OnInit {
    private _rating: number;

    @Input()
    get rating(): number {
        return this._rating;
    }

    set rating(rating: number) {
        this._rating = rating;
        this.ratingArr = [];
        for (let i = 0; i < this.rating; i++) {
            this.ratingArr.push(i.toString());
        }
    }

    ratingArr = [];

    constructor() {
    }

    ngOnInit() {
    }
}
