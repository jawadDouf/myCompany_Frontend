import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './homepage/landing-page/landing-page.component';
import { AuthentificationComponent } from './authFeature/pages/authentification/authentification.component';
import { DashboardMainSectionComponent } from './dashboard-main-section/dashboard-main-section.component';
import { EmployeesPageComponent } from './employeesCrudFeature/pages/employees-page/employees-page.component';
import { UnitsPageComponent } from './unitsCrudFeature/pages/units-page/units-page.component';
import { ChatLandingPageComponent } from './chatFeature/pages/chat-landing-page/chat-landing-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent,},
  { path: 'authentification',component: AuthentificationComponent},
  {
     path: 'dashboard',
     component: DashboardMainSectionComponent,
      children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'upload-document' },
        {
          path: 'employees/:unit/:id',
          component: EmployeesPageComponent,
        },
        {
          path: 'units/:unit/:id',
          component: UnitsPageComponent,
        },
        {
          path: 'chat/:unit/:id',
          component: ChatLandingPageComponent
        }
  //     {
  //       path: 'preview-doc',
  //       component: DocumentPreviewComponent,
  //     },
  //     { path: 'upload-document', component: UploadDocComponent },
  //     { path: 'collaborator', component: CollaborateursComponent },
      ]
      // ,canActivate:[AuthGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
