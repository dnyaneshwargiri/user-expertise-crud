import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserExpertiseService } from '../user-expertise.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {
  constructor(
    private userExpertiseService: UserExpertiseService,
    private _snackBar: MatSnackBar,
    private router : Router,
  ) {}
  public mockData: any[] = [
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'john@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
  ];


  usersDataSource : any[] =[];
  public dataSource = new MatTableDataSource(this.usersDataSource);
  displayedColumns: string[] = ['id', 'email', 'name', 'gender', 'mobile', 'dob', 'profilepic', 'socialLoginId', 'professionalSummary', 'user_type', 'createdAt','actions'];
  
  @ViewChild('paginator') paginator!: MatPaginator;
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {

    this.getAllUsers();
    // this.userExpertiseService.getAllUsers().subscribe(
    //   (users) => {
    //     this.usersDataSource = users
    //   },
    //   (error) => {
    //     this._snackBar.open(
    //       'Error while getiing users data, hence added mock data.',
    //       'close',
    //       {
    //         horizontalPosition: this.horizontalPosition,
    //         verticalPosition: this.verticalPosition,
    //         duration: 5000,
    //         panelClass: ['error-snackbar']
    //       }
    //     );
    //     this.usersDataSource = this.mockData;
    //   }
    // );
  }

  deleteUser(id: any) {
    let delId = id;
    this.userExpertiseService.deleteUserById(id).subscribe(
      () => {
        this._snackBar.open(
          'User deleted successfully',
          'close',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['error-snackbar']
          }
        );
        this.getAllUsers();
      },
      (error) => {
        this._snackBar.open(
          'Error while deleting user.',
          'close',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['error-snackbar']
          }
        );
      }
    );
    
  }

  editUser(id:any){
    console.log(id);
    this.router.navigate(['app-update-user']);
  }

  getAllUsers(){
    this.userExpertiseService.getAllUsers().subscribe(
      (users:any) => {
        console.log(users);
        // this.dataSource = users.data;
        this.dataSource = new MatTableDataSource(users.data)
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
        // this.usersDataSource = this.mockData;
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
}
}
