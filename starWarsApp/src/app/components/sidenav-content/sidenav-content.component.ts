import { Component, OnInit } from '@angular/core';

import { SwAPIDataService } from '../../services/sw-apidata.service';

import { Character } from '../../domains/character';

@Component({
    selector: 'app-sidenav-content',
    templateUrl: './sidenav-content.component.html',
    styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {
    characters: Character[];

    constructor(
        private swAPIDataService: SwAPIDataService
    ) { }

    ngOnInit() {
        this.swAPIDataService.getCharacters().subscribe(characters => {
            this.characters = characters.results;
        });
    }
}
