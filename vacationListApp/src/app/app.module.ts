import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { VacationSpotsService } from './services/vacation-spots.service';
import { VacationSpotsComponent } from './components/vacation-spots/vacation-spots.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationSpotsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [VacationSpotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
