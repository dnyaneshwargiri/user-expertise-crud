import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss'],
})
export class SearchuserComponent implements OnInit {
  usersDataSource: any;
  users: any;
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'mobile'];
  public mockData: any[] = [
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'danny',
      lastName: 'grister',
      mobile: '490937377337',
    },
  ];
  showSearchResult: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}
  userExpertise: string = '';
  public userExpertiseSearchForm: FormGroup = this.fb.group({
    userExpertise: ['', Validators.required],
  });
  ngOnInit() {}
  searchUserByExpertise() {
    this.userService
      .getAllUsersByExpertise(
        this.userExpertiseSearchForm.get('userExpertise')?.value
      )
      .subscribe(
        (users: any) => {
          this.usersDataSource = users;
          this.showSearchResult = true;
        },
        (error) => {
          this._snackBar.open(
            'Error while searching user with given expertise',
            'close',
            {
              horizontalPosition: 'center',
              verticalPosition: 'top',
              duration: 5000,
              panelClass: ['error-snackbar']
            }
          );
          this.showSearchResult = true;
          this.usersDataSource = this.mockData;
        }
      );
  }
}
