import { Injector, NgModule } from '@angular/core';
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
import { AddExpertiseComponent } from './add-expertise/add-expertise.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateWorkHistoryComponent } from './update-work-history/update-work-history.component';
import { userReducer } from './user-state/user.reducer';
import { StoreModule } from '@ngrx/store';
import {MatPaginatorModule} from  '@angular/material/paginator'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { createCustomElement } from '@angular/elements';
import {APP_BASE_HREF} from '@angular/common';


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
      SearchuserComponent,
      AddExpertiseComponent,
      UpdateUserComponent,
      UpdateWorkHistoryComponent
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
    MatPaginatorModule,
    MatButtonModule,
    MatAutocompleteModule,
    StoreModule.forRoot({ user: userReducer })
  ],
  providers: [UserExpertiseService,{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private injector: Injector){
    const appComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('user-expertise', appComponent);
  }

  ngDoBootstrap() {  
  }
}
