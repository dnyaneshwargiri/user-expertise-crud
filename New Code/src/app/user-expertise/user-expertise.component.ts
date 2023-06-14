import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-expertise',
  templateUrl: './user-expertise.component.html',
  styleUrls: ['./user-expertise.component.scss'],
})
export class UserExpertiseComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar,
    private route : Router
  ) {}

  public userExpertiseForm: FormGroup = this.fb.group({
    // name: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    // userExpertise: ['', Validators.required],
    // description: ['', Validators.required],

      area_of_expertise: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
  });
  ngOnInit() {}
  addUserExpertise() {
    let id = localStorage.getItem('user_id');
    const payload={
      ExpertiseForm:this.userExpertiseForm.value,
      id
    };
    this.userService.addExpertises(payload).subscribe(
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

    this.route.navigate(['app-work-history']);
  }
}
