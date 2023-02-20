import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageCoverComponent } from './homepage/page-cover/page-cover.component';
import { FunctionsSectionComponent } from './homepage/functions-section/functions-section.component';
import { ReviewsComponent } from './homepage/reviews/reviews.component';
import { ItsFreeComponent } from './homepage/its-free/its-free.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageCoverComponent,
    FunctionsSectionComponent,
    ReviewsComponent,
    ItsFreeComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
