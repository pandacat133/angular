import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LogOutComponent } from './components/log-out/log-out.component';

import { UserProfileService } from './services/user-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProductsComponent,
    UserProfileComponent,
    ContactUsComponent,
    LogOutComponent
  ],

  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'logOut', component: LogOutComponent },
    ])
  ],

  providers: [
    UserProfileService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
