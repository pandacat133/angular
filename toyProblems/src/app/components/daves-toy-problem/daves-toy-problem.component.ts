import { Component, OnInit } from '@angular/core';

import { DavesDataService } from '../../services/daves-data.service';
import { Joke } from '../../domains/tv-shows';

@Component({
    selector: 'app-daves-toy-problem',
    templateUrl: './daves-toy-problem.component.html',
    styleUrls: ['./daves-toy-problem.component.css']
})
export class DavesToyProblemComponent implements OnInit {
    reverseThisWord = '!krow dooG !ssalc hcetm olleH';
    alphabet: string[];
    numbers: number[];
    jokes: Joke[];

    constructor(
        private davesDataService: DavesDataService
    ) { }

    ngOnInit() {
        this.alphabet = this.davesDataService.alphabet;
        this.numbers = this.davesDataService.numbers;
        this.jokes = this.davesDataService.jokes;
        console.log('hello');

        // #1 Reverse 'reverseThisWord' and console long the result
        let reversedWord = this.reverseThisWord.split("").reverse().join("");
        console.log(reversedWord);

        // #2 Console log the 1st, 3rd, 5th, 7th, etc letters after they have been combined into a single string

        // #3 Console log all multiples of 5, 7, and 8.

        // #4 Console log every joke that has an actual category

        // #5 Console log every joke that contains the word 'hit'

        // #6 Use *ngFor to display the jokes in your template file

        // #7 Use *ngIf to display only jokes with the word 'hit' in it
    }

}
