import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { CharacterListFilterPipe } from './components/character-list/character-list-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CharacterListComponent,
        SidenavContentComponent,
        CharacterListFilterPipe
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
