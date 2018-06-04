import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPeople() : Observable<any> {
    return this.http.get(`https://swapi.co/api/people`);
  }

  getPlanets() : Observable<any> {
    return this.http.get(`https://swapi.co/api/planets`);
  }

  getStarShips() : Observable<any> {
    return this.http.get(`https://swapi.co/api/starships`);
  }
}
