import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VacationSpotsService } from './services/vacation-spots.service';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { VacationRatingComponent } from './components/vacation-rating/vacation-rating.component';
import { VacationDetailComponent } from './components/vacation-detail/vacation-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        VacationListComponent,
        VacationRatingComponent,
        VacationDetailComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [
        VacationSpotsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
