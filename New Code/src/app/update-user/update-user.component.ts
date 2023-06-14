import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserExpertiseService } from '../user-expertise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


  constructor(private userServie : UserExpertiseService, private router : ActivatedRoute,private route :Router) { }

  editUser:any = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl(''),
    dob : new FormControl(''),
    gender : new FormControl(''),
    usertype : new FormControl('')
  })

  ngOnInit(): void {
    let id = this.router.snapshot.params['id']
    this.userServie.getUserById(id).subscribe((result:any)=>{
      console.log(result);

      if(result){
        this.editUser.get('name').setValue(result.data.name);
        this.editUser.get('email').setValue(result.data.email);
        this.editUser.get('mobile').setValue(result.data.mobile);
        this.editUser.get('dob').setValue(result.data.dob);
        this.editUser.get('gender').setValue(result.data.gender);
        this.editUser.get('usertype').setValue(result.data.user_type);
      }
    });
  }

  updateUser(){
    this.userServie.updateUserById(this.router.snapshot.params['id'],this.editUser.value).subscribe((result)=>{
      console.log(result);
      this.route.navigate(['app-user']);
    })
  }

}
