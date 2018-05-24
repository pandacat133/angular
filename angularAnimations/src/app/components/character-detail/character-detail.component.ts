import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';

import { CharacterService } from '../../services/character.service';

import { Character } from '../../domains/character';

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
    animations: [
        trigger('fade', [
            state('inactive', style({opacity: 0})),
            state('active', style({opacity: 1})),
            transition('inactive <=> active', [
                animate(200)
            ]),
        ]),
        trigger('friend', [
            transition('void => *', [
                style({transform: 'translateX(100%)'}),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateX(-100%)'}))
            ])
        ]),
        trigger('zoom', [
            state('active',
                style({transform: 'scale(1)'})
            ),
            state('active',
                style({
                    transform: 'scale(1.25)',
                    backgroundColor: 'red',
                    borderRadius: '20px',
                    padding: '10px',
                    zIndex: '1000'
                })
            ),
            transition('active <=> inactive', animate('200ms ease-in'))
        ]),
        trigger('bounce', [
            state('inactive', style({backgroundColor: '#4054B2'})),
            transition('inactive => active', [
                animate(1000, keyframes([
                    style({backgroundColor: 'yellow', offset: 0}),
                    style({backgroundColor: 'green', offset: 0.5}),
                    style({backgroundColor: 'orange', offset: 1}),
                ]))
            ])
        ])
      ],
})
export class CharacterDetailComponent implements OnInit {
    // *** Today's Goal ***

    // #1 Create an animation to fade in additional detail div

    // #2 Create an animation to have an added friend slide in from right to left

    // #3 Create an animation to zoom in on a subset of details

    // #4 Create keyframes to transition background color


    activeCharacter: Character;
    state = 'inactive'
    detailState = 'inactive';
    bounceState = 'inactive';
    friends: String[] = [];
    friend: String;

    constructor(
        private characterService: CharacterService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
      this.characterService
        .getCharacter(this.activatedRoute.snapshot.params['id'])
        .subscribe(character => this.activeCharacter = character );
    }

    back() {
      this.router.navigate(['/characters']);
    }

    changeAnimState() {
        if (this.state === 'inactive') {
            this.state = 'active';
        } else {
            this.state = 'inactive';
        }
    }

    changeDetailAnimState() {
        if (this.detailState === 'inactive') {
            this.detailState = 'active';
        } else {
            this.detailState = 'inactive';
        }
    }

    addFriend() {
        this.friends.push(this.friend);
        this.friend = undefined;
    }

    delete(i: number) {
        this.friends.splice(i, 1);
    }

    bounce() {
        this.bounceState = 'active';
        
        setTimeout(() => {
            this.bounceState = 'inactive';
        }, 1000);
    }

}
