import { Component, OnInit } from "@angular/core";
import { UserExpertiseService } from "../user-expertise.service";
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from "@angular/material/snack-bar";

@Component({
  selector: "app-work-history",
  templateUrl: "./work-history.component.html",
  styleUrls: ["./work-history.component.scss"],
})
export class WorkHistoryComponent implements OnInit {
  mockData: any[] = [
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
    {
      userId: "john",
      expertise: "Frontend",
      description: "champion",
      experience: "6",
    },
  ];
  constructor(
    private userExpertiseService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}
  displayedColumns: string[] = [
    
    "userId",
    "expertise",
    "description",
    "experience",
    "createdAt",
    "Actions",
    
  ];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  usersDataSource: any = [];
  ngOnInit(): void {
    this.userExpertiseService.getWorkHistory().subscribe(
      (response) => { this.usersDataSource = response;
      console.log(response);},
      (error) => {
        this.usersDataSource = this.mockData;
        this._snackBar.open(
          "Error while getting work history, showing mockdata",
          "close",
          {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 5000,
            panelClass: ["error-snackbar"],
          }
        );
      }
    );
  }

  deleteUserExpertise(userId : any){
    let user_id = userId;
    this.userExpertiseService.deleteExpertisesById(user_id).subscribe(
      () => {
        this._snackBar.open(
          'User expertise deleted successfully',
          'close',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000,
            panelClass: ['error-snackbar']
          }
        );
        this.getAllUserExpertise();
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

  getAllUserExpertise(){
    this.userExpertiseService.getWorkHistory().subscribe(
      (response) => { this.usersDataSource = response;
      console.log(response);},
      (error) => {
        this.usersDataSource = this.mockData;
        this._snackBar.open(
          "Error while getting work history, showing mockdata",
          "close",
          {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 5000,
            panelClass: ["error-snackbar"],
          }
        );
      }
    );
  }
}
