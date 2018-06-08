import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit {
  starShipData = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getStarShips().subscribe(result => {
      this.starShipData = result.results;
    });
  }

}
