import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import {StarwarsService} from './services/starwars.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    StarShipsComponent
  ],
  imports: [
    BrowserModule,
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
