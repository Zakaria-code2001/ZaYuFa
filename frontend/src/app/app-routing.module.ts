// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';  // make sure the path is correct
import { SignupComponent } from './auth/signup/signup.component';
import { RecordingUploadComponent } from './recordings/recording-upload/recording-upload.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // default route
  { path: 'signup', component: SignupComponent },
  { path: 'recording', component: RecordingUploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
