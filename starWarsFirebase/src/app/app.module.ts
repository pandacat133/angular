import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ForceStrengthComponent } from './components/force-strength/force-strength.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        ForceStrengthComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
          { path: "home", component: HomeComponent },
          { path: "characters", component: CharacterListComponent },
          { path: "character/:id", component: CharacterDetailComponent }
        ])
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
