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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardMainSectionComponent } from './dashboard-main-section/dashboard-main-section.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';
import { ParagraphComponenetComponent } from './paragraph-componenet/paragraph-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageCoverComponent,
    FunctionsSectionComponent,
    ReviewsComponent,
    ItsFreeComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardNavComponent,
    DashboardMainSectionComponent,
    EmployeesTableComponent,
    FilterEmployeesComponent,
    ParagraphComponenetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
