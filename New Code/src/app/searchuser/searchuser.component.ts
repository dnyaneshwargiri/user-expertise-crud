import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss'],
})
export class SearchuserComponent implements OnInit {
  usersDataSource: any;
  users: any;
  displayedColumns: string[] = ['id', 'email', 'name', 'gender', 'mobile', 'dob', 'profilepic', 'socialLoginId', 'professionalSummary', 'user_type', 'createdAt'];
  public mockData: any[] = [
    {
      email: 'abc@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'abc@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'abc@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'abc@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'abc@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
    {
      email: 'dny@amdocs.com',
      firstName: 'john',
      lastName: 'grister',
      mobile: '490937377337',
    },
  ];
  showSearchResult: boolean = false;
  filteredOptions: any[] = [];
  options: any[] = [];


  constructor(
    private fb: FormBuilder,
    private userService: UserExpertiseService,
    private _snackBar: MatSnackBar
  ) { }
  userExpertise: string = '';
  public userExpertiseSearchForm: FormGroup = this.fb.group({
    userExpertise: ['', Validators.required],
  });
  ngOnInit() {
    this.fetchAllExpertise();

    this.userExpertiseSearchForm.get('userExpertise')?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(response => {
        console.log('entered data is ', response);
        if (response && response.length) {
          this.filterData(response);
        } else {
          this.filteredOptions = [];
        }

      })
  }

  private fetchAllExpertise() {
    this.userService.getAllExpertises().subscribe({
      next: (response: any) => {
        this.options = response.data.map((item:any) => item.area_of_expertise);
      },
      error: (err: any) => {
        this._snackBar.open(
          'Error while fetching expertises',
          'close',
          {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            panelClass: ['error-snackbar']
          }
        );
      }
    });
  }

  filterData(enteredData: string) {
    if (!enteredData) {
      this.filteredOptions = []
      return;
    }
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  // getNames(){
  //   this.service.getData().subscribe(response => {
  //     this.options = response;
  //   })
  // }
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
