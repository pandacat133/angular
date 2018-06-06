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
    shoppingList: {id: string, productId: string, volume: number}[];
    products: {id: string, price: number, img: string}[];

    constructor(
        private davesDataService: DavesDataService
    ) {

     }

    ngOnInit() {
        this.alphabet = this.davesDataService.alphabet;
        this.numbers = this.davesDataService.numbers;
        this.jokes = this.davesDataService.jokes;
        this.shoppingList = this.davesDataService.shoppingList;
        this.products = this.davesDataService.products;
        console.log('hello');

        // #1 Reverse 'reverseThisWord' and console long the result

        // #2 Console log the 1st, 3rd, 5th, 7th, etc letters after they have been
        // combined into a single string

        // #3 Console log all multiples of 5, 7, and 8.

        // #4 Console log every joke that has an actual category

        // #5 Console log every joke that contains the word 'hit'

        // #6 Use *ngFor to display the jokes in your template file

        // #7 Use *ngIf to display only jokes with the word 'hit' in it

        // #8 In the same order as the shopping list, display the product which has
        // an id that matches the productId in the shopping list. The HTML should
        // display the product id, total price, and image. 

        // this.reverseString(this.reverseThisWord);
        // this.displayOddChars(this.reverseThisWord);
        // this.returnJokes(this.jokes);
    }

    reverseString(word: string) {
        let newWord = word.split('');
        newWord = newWord.reverse();
        let secondWord = newWord.join('')
        // document.write(secondWord);
        return secondWord;
    }

    displayOddChars(word: string) {
        let wordArr = word.split('');
        let reversedWord = this.reverseString(word);
        for (let i = 0; i < wordArr.length; i += 2) {
            document.write(reversedWord[i]);
        }
    }

    returnJokes(jokes: any) {
        console.log(jokes);
        let newJokes = jokes.filter(joke => {
            if (joke.categories && joke.categories.length > 0 && joke.categories.indexOf('explicit') === -1) {
                return joke;
            }
        });

        console.log(newJokes);
    }

}
