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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardMainSectionComponent } from './dashboard-main-section/dashboard-main-section.component';
import { EmployeesTableComponent } from './employeesCrudFeature/components/employees-table/employees-table.component';
import { FilterEmployeesComponent } from './employeesCrudFeature/components/filter-employees/filter-employees.component';

import { UnitsTableComponent } from './unitsCrudFeature/components/units-table/units-table.component';
import { ChatUiComponent } from './chatFeature/components/chat-ui/chat-ui.component';
import { SocketsService } from './chatFeature/services/sockets.service';
import { rxStompServiceFactory } from './chatFeature/tsModules/rx-stomp-service-factory';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { AuthentificationComponent } from './authFeature/pages/authentification/authentification.component';
import { LandingPageComponent } from './homepage/landing-page/landing-page.component';
import { EmployeesPageComponent } from './employeesCrudFeature/pages/employees-page/employees-page.component';
import { ParagraphComponenetComponent } from './employeesCrudFeature/components/paragraph-componenet/paragraph-componenet.component';
import { UnitsPageComponent } from './unitsCrudFeature/pages/units-page/units-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ChatLandingPageComponent } from './chatFeature/pages/chat-landing-page/chat-landing-page.component';
import { ManagementLandingPageComponent } from './companyManagement/pages/management-landing-page/management-landing-page.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';


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
    LandingPageComponent,
    EmployeesPageComponent,
    UnitsPageComponent,
    ChatLandingPageComponent,
    ManagementLandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: SocketsService,
      useFactory: rxStompServiceFactory,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
