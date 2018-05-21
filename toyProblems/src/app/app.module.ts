import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DavesToyProblemComponent } from './components/daves-toy-problem/daves-toy-problem.component';

import { DavesDataService } from './services/daves-data.service';
@NgModule({
    declarations: [
        AppComponent,
        DavesToyProblemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        DavesDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
