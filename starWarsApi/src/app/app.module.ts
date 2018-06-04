import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { StarwarsService } from './services/starwars.service';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    StarShipsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'people', component: PeopleComponent},
      {path: 'planets', component: PlanetsComponent},
      {path: 'starShips', component: StarShipsComponent},
    ])
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent],
})

export class AppModule { }
