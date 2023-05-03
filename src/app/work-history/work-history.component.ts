import { Component, OnInit } from '@angular/core';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent implements OnInit {
  mockData: any[] = [
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
    {
      userId: 'danny',
      expertise: 'Frontend',
      description: 'champion',
      experience: '6',
    },
  ];
  constructor(
    private userExpertiseService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) {}
  displayedColumns: string[] = [
    'userId',
    'expertise',
    'description',
    'experience',
  ];
  usersDataSource: any = [];
  ngOnInit(): void {
    this.userExpertiseService.getWorkHistory().subscribe(
      (response) => {},
      (error) => {
        this.usersDataSource = this.mockData;
        this._snackBar.open(
          'Error while getting work history, showing mockdata',
          'close',
          {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            panelClass: ['error-snackbar'],
          }
        );
      }
    );
  }
}
