import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  providers: [UserExpertiseService],
})
export class UserRegistrationComponent implements OnInit {
  user_type: any = ['admin', 'user']
  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar,
    private router : Router
  ) {}

  public RegistrationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    user_type: [this.user_type[0], Validators.required],
    password: ['', Validators.required],
    mobile: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

 
  userType(e: any) {
    console.log(e.target.value);
  }  
  ngOnInit(): void {}

  addUser() {
    this.userService.addUser(this.RegistrationForm.value).subscribe(

      (res) => {
    
        localStorage.setItem("user_type", this.RegistrationForm.controls["user_type"].value);
        this._snackBar.open('User registred successfully. ', 'ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
          panelClass: ['success-snackbar'],
        });

        console.log(res);
        if (res.data && res.success){
        localStorage.clear();
        localStorage.setItem('Response',res.success.toString());
        localStorage.setItem("user_id",JSON.parse(res?.data['id']));}
        console.log(localStorage);
         if(res.success){
           this.router.navigate(['app-add-expertise']);
        }

     
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
