import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { Character } from '../domains/character';

@Injectable()
export class CharacterService {
    activeCharacter = new BehaviorSubject<Character>(null);

    constructor(
        private http: HttpClient
    ) { }

    getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>
        ('assets/api/characters.json');
    }

    getCharacter(id: string): Observable<Character> {
      return this.getCharacters().pipe(map((characters: Character[]) => {
        return characters.find((character: Character) => character.id == id)
      }));
    }
}
