import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/auth/auth.guard';
import { LoginComponent } from '@core/components/login/login.component';
import { LogadoComponent } from '@core/components/logado/logado.component';
import { FormComponent } from './campanhas/form/form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LogadoComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: "",
      //   loadChildren: "./dashboard/dashboard.module#DashboardModule"
      // },
      {
        path: 'campanhas',
        loadChildren: './campanhas/campanhas.module#CampanhasModule'
      },
      // quando criar dash, redirecionar para dash
      { path: '**', redirectTo: 'campanhas' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
