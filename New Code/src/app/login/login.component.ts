import { Component, OnInit } from '@angular/core';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_KEYS } from '../app.constants';
import { Store } from '@ngrx/store';
import { saveUser } from '../user-state/user.action';
import { UserModel } from '../user-state/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  constructor(private userService: UserExpertiseService, private router : Router, private store:Store,
  private _snackBar: MatSnackBar,private formBuilder: FormBuilder) { }

    public LoginForm: FormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
 

  }
  onSubmit(){
    console.log(this.LoginForm.value);
    this.userService.login(this.LoginForm.value).subscribe(
      (res:any) => {
       
        const data:UserModel = res.data;
        // localStorage.clear();
       
        // localStorage.setItem(LOCAL_KEYS.USER_INFO, data);
       
        // localStorage.setItem('Response', res.success.toString());
       localStorage.setItem("user_id", JSON.parse(res?.data['id']));
       localStorage.setItem("user_type", res?.data.user_type);
        // console.log(localStorage);

        this.store.dispatch(saveUser(data));
       
        this._snackBar.open('User logged in successfully. ', 'ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
          panelClass: ['success-snackbar'],
        });
        this.router.navigate(['app-user']);
     
      },
      (error) => {
        this._snackBar.open('Error while registering.', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      }
    );
  }
}

