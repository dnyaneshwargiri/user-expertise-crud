import { Component, OnInit } from '@angular/core';
import { UserExpertiseService } from '../user-expertise.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private userExpertiseService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}
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
  usersDataSource: any;
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'mobile'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    this.userExpertiseService.getAllUsers().subscribe(
      (users) => {
        this.usersDataSource = users;
      },
      (error) => {
        this._snackBar.open(
          'Error while getiing users data, hence added mock data.',
          'close',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['error-snackbar']
          }
        );
        this.usersDataSource = this.mockData;
      }
    );
  }
}
