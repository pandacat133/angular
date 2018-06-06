import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-animation-sandbox',
    templateUrl: './animation-sandbox.component.html',
    styleUrls: ['./animation-sandbox.component.css']
})
export class AnimationSandboxComponent implements OnInit {
    // TODO 
    // 1. When an item is added to the movie list, the item should transition smoothly from right to left
    // until it reaches it's default position.

    // 2. When clicking on the movie name (not the delete icon), the text should double in size

    // 3. Multiple steps - Move the blue box down the screen 3 times it's current height, move the box to the
    // center (horizontally) of the page, have the box rotate 45 degrees, shrink the box to half it's current size,
    // turn the box green. 

    // 4. Add a button that when clicked will cause the movie list to fade-in/fade-out


    movieList: String[] = [];
    currentMovie: String;

    constructor() { }

    ngOnInit() {
    }

    addMovie() {
        if (this.currentMovie) {
            this.movieList.push(this.currentMovie);
            this.currentMovie = undefined;
        }
    }

    deleteMovie(i: number) {
        this.movieList.splice(i, 1);
    }
}
