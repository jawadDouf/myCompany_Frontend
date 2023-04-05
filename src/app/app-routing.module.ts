import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './homepage/landing-page/landing-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent,},
  // {
  //   path: 'dashboard',
  //   component: PagesComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'upload-document' },
  //     {
  //       path: 'generate-doc-by-excel',
  //       component: GenerateByExcelComponent,
  //     },
  //     {
  //       path: 'preview-doc',
  //       component: DocumentPreviewComponent,
  //     },
  //     { path: 'upload-document', component: UploadDocComponent },
  //     { path: 'collaborator', component: CollaborateursComponent },
  //   ],canActivate:[AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
