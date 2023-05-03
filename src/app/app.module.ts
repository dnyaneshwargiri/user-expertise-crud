import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { UserExpertiseComponent } from './user-expertise/user-expertise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserExpertiseService } from './user-expertise.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [		
    AppComponent,
    UserComponent,
    HomeComponent,
    UserRegistrationComponent,
    LoginComponent,
    WorkHistoryComponent,
    UserExpertiseComponent,
      FooterComponent,
      SearchuserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [UserExpertiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
