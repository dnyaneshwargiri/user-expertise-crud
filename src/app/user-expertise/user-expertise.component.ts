import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-expertise',
  templateUrl: './user-expertise.component.html',
  styleUrls: ['./user-expertise.component.scss'],
})
export class UserExpertiseComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}

  public userExpertiseForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userExpertise: ['', Validators.required],
    description: ['', Validators.required],
  });
  ngOnInit() {}
  addUserExpertise() {
    this.userService.addExpertises(this.userExpertiseForm.value).subscribe(
      (res) => {},
      (error) => {
        this._snackBar.open('Error while adding user expertise', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
