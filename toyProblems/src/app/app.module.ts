import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DavesToyProblemComponent } from './components/daves-toy-problem/daves-toy-problem.component';
import { AnimationSandboxComponent } from './components/animation-sandbox/animation-sandbox.component';

import { DavesDataService } from './services/daves-data.service';

import { MaterialModule } from './material.module';
@NgModule({
    declarations: [
        AppComponent,
        DavesToyProblemComponent,
        AnimationSandboxComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'toy-problems', component: DavesToyProblemComponent },
            { path: 'animation-sandbox', component: AnimationSandboxComponent },
        ])
    ],
    providers: [
        DavesDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
