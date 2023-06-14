import { Component, OnInit } from '@angular/core';
import { UserExpertiseService } from '../user-expertise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-work-history',
  templateUrl: './update-work-history.component.html',
  styleUrls: ['./update-work-history.component.scss']
})
export class UpdateWorkHistoryComponent implements OnInit {

  constructor(private userServie : UserExpertiseService, private router : ActivatedRoute,private route :Router) { }

  editUserExpertise:any = new FormGroup({
    area_of_expertise : new FormControl(''),
    description : new FormControl(''),
    experience : new FormControl(''),
    user_id : new FormControl('')
  })

  useridInput :boolean = true;

  ngOnInit(): void {

    let id = this.router.snapshot.params['id']
    console.log(id)
    this.userServie.getExpertisesById(id).subscribe((result:any)=>{
      console.log(result);

      if(result){
        this.editUserExpertise.get('area_of_expertise').setValue(result.data.area_of_expertise);
        this.editUserExpertise.get('description').setValue(result.data.description);
        this.editUserExpertise.get('experience').setValue(result.data.experience);
        this.editUserExpertise.get('user_id').setValue(result.data.user_id);
      }
    });
  }

  updateUserExpertise(){
    this.userServie.updateExpertisesById(this.router.snapshot.params['id'],this.editUserExpertise.value).subscribe((result)=>{
      console.log(result);
      this.route.navigate(['app-work-history']);
    })
  }
}
