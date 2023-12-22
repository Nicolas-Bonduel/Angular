import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContentWeek2Component } from './components/week2/content-week2.component';
import { LoginComponent } from './components/week2/login/login.component';
import { authGuard } from './components/week2/guards/auth.guard';

const routes: Routes = [
  {
    path: 'week1',
    component: ContentComponent
  },
  {
    path: '',
    redirectTo: '/week1',
    pathMatch: 'full'
  },
  {
    path:'week2',
    component: ContentWeek2Component,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
