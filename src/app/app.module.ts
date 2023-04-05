import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PageCoverComponent } from './homepage/page-cover/page-cover.component';
import { FunctionsSectionComponent } from './homepage/functions-section/functions-section.component';
import { ReviewsComponent } from './homepage/reviews/reviews.component';
import { ItsFreeComponent } from './homepage/its-free/its-free.component';

import { LoginComponent } from './authFeature/componenets/login/login.component';
import { RegisterComponent } from './authFeature/componenets/register/register.component';
import { FormsModule } from '@angular/forms';

import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardMainSectionComponent } from './dashboard-main-section/dashboard-main-section.component';
import { EmployeesTableComponent } from './employeesCrudFeature/components/employees-table/employees-table.component';
import { FilterEmployeesComponent } from './employeesCrudFeature/components/filter-employees/filter-employees.component';
import { ParagraphComponenetComponent } from './employeesCrudFeature/components/paragraph-componenet/paragraph-componenet.component';
import { UnitsTableComponent } from './unitsCrudFeature/components/units-table/units-table.component';
import { ChatUiComponent } from './chatFeature/components/chat-ui/chat-ui.component';
import { SocketsService } from './chatFeature/services/sockets.service';
import { rxStompServiceFactory } from './chatFeature/tsModules/rx-stomp-service-factory';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { AuthentificationComponent } from './authFeature/pages/authentification/authentification.component';


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
    ParagraphComponenetComponent,
    UnitsTableComponent,
    ChatUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: SocketsService,
      useFactory: rxStompServiceFactory,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
