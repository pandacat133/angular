import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SwAPIDataService {

    constructor(
        private http: HttpClient
    ) { }

    getCharacters(): Observable<any> {
        // return this.http.get('https://swapi.co/api/people/')
      return this.http.get('assets/api/characters.json');
    }

    getFilmName(url: string): Observable<any> {
        console.log(url);
        return this.http.get(url);
    }
}
