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
  selector: 'app-add-expertise',
  templateUrl: './add-expertise.component.html',
  styleUrls: ['./add-expertise.component.scss']
})
export class AddExpertiseComponent implements OnInit {
  

  constructor(private fb: FormBuilder,
    private userService: UserExpertiseService, private _snackBar: MatSnackBar,private router : Router) { }

  public ExpertiseForm: FormGroup = this.fb.group({
    area_of_expertise: ['', Validators.required],
    description: ['', Validators.required],
    experience: ['', Validators.required],
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  ngOnInit(): void {
  }

  addExpertises() {
    
    let id = localStorage.getItem('user_id');
    console.log(this.ExpertiseForm.value);
    const payload = {
      ExpertiseForm: this.ExpertiseForm.value,
      id
    };
    this.userService.addExpertises(payload).subscribe(
      (res) => {

        this._snackBar.open('User added expertise successfully. ', 'ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
          panelClass: ['success-snackbar'],
        });
        // this.router.navigate(['app-login']);
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
