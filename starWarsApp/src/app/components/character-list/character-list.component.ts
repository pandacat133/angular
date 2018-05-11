import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SwAPIDataService } from '../../services/sw-apidata.service';

import { Character } from '../../domains/character';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
    characters: Character[];
    filteredCharacters: Character[];
    characterFC = new FormControl('');
    hideDetails = false;

    constructor(
        private swAPIDataService: SwAPIDataService
    ) { }

    ngOnInit() {
        this.swAPIDataService.getCharacters().subscribe(characters => {
            console.log(characters.results);
            this.characters = characters.results;

            // Use filterCharacters for template binding in sidenav
            this.filteredCharacters = characters.results;
        });

        this.characterFC.valueChanges.subscribe(value => {
            if (!value) {
                this.filteredCharacters = this.characters;
                return;
            };

            this.filteredCharacters = this.characters.filter(character => {
                return character.name.includes(value);
            });
        });
    }

    hideDetailsFn() {
        this.hideDetails = !this.hideDetails;
    }

    logSomething(characterName: string) {
      console.log(characterName);
    }
}
