import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { UserExpertiseComponent } from './user-expertise/user-expertise.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { AddExpertiseComponent } from './add-expertise/add-expertise.component';
import { AuthGuard } from './auth-guard.guard';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateWorkHistoryComponent } from './update-work-history/update-work-history.component';

const routes: Routes = [
  {path : 'app-user',component :UserComponent},
  {path : 'app-login',component :LoginComponent},
  {path : 'app-user-registration',component :UserRegistrationComponent},
  {path : 'app-user',component :UserComponent, canActivate: [AuthGuard],},
  {path : 'app-work-history',component :WorkHistoryComponent, canActivate: [AuthGuard],},
  {path : 'app-user-expertise',component :UserExpertiseComponent, canActivate: [AuthGuard],},
  {path : 'app-search-user',component :SearchuserComponent, canActivate: [AuthGuard],},
  {path : 'app-add-expertise',component :AddExpertiseComponent},
  {path : 'app-update-user/:id',component :UpdateUserComponent},
  {path : 'app-update-work-history/:id', component : UpdateWorkHistoryComponent},
  
  
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
