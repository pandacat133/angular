import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../domains/character';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CharacterService {
    activeCharacter = new BehaviorSubject<Character>(null);

    constructor(
        private http: HttpClient,
        private fb: AngularFireDatabase
    ) { }

    getCharacters(): Observable<Character[]> {
        // return this.http.get<Character[]>('assets/api/characters.json');
        return this.fb.list<Character>('characters').snapshotChanges().pipe(map(
          characters => {
            return characters.map(character => {
              const data: Character = character.payload.val();
              const fbid: string = character.key;
              return { fbid, ...data};
            });
          }
        ));
    }

    getCharacter(id: string): Observable<Character> {
      // return this.getCharacters().pipe(map((characters: Character[]) => {
      //   return characters.find((character: Character) => character.id == id)
      // }));
      return this.fb.object(`characters/${id}`).valueChanges();
    }
}
