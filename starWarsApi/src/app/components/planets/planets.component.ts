import { Component, OnInit } from '@angular/core';
import {StarwarsService} from '../../services/starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planetData = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getPlanets().subscribe(result => {
      this.planetData = result.results;
    });
  }

}
