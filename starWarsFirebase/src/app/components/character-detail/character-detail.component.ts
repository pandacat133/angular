import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../domains/character';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    activeCharacter: Character;

    constructor(
        private characterService: CharacterService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
      this.characterService
        .getCharacter(this.activatedRoute.snapshot.params['id'])
        .subscribe(character => this.activeCharacter = character );
    }

    back() {
      this.router.navigate(['/characters']);
    }

}
