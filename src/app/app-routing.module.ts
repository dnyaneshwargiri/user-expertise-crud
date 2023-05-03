import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { UserExpertiseComponent } from './user-expertise/user-expertise.component';
import { SearchuserComponent } from './searchuser/searchuser.component';

const routes: Routes = [
  {path : 'app-user',component :UserComponent},
  {path : 'app-login',component :LoginComponent},
  {path : 'app-user-registration',component :UserRegistrationComponent},
  {path : 'app-user',component :UserComponent},
  {path : 'app-work-history',component :WorkHistoryComponent},
  {path : 'app-user-expertise',component :UserExpertiseComponent},
  {path : 'app-search-user',component :SearchuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
