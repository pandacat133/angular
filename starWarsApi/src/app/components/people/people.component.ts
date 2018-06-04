import { Component, OnInit } from '@angular/core';
import {StarwarsService} from '../../services/starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleData = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getPeople().subscribe(result => {
      this.peopleData = result.results;
    });
  }
}
