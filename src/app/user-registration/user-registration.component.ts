import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  providers: [UserExpertiseService],
})
export class UserRegistrationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}

  public RegistrationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    user_type: ['', Validators.required],
    password: ['', Validators.required],
    mobile: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {}

  addUser() {
    this.userService.addUser(this.RegistrationForm.value).subscribe(
      (res) => {
        this._snackBar.open('User registred successfully. ', 'ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
          panelClass: ['success-snackbar'],
        });
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
