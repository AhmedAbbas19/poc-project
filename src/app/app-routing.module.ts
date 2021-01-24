import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './common/services/auth-guard.service';
import { RoleGuardService } from './common/services/role-guard.service';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {
    path: "dashboard", 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      roles: [ 'admin', "manager" ]
    },
    canActivate: [ AuthGuardService, RoleGuardService ]
  },
  {
    path: "profile", 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: "auth", 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
