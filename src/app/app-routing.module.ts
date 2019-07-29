import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, Router, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'graficas1', component: Graficas1Component},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotpagefoundComponent }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
