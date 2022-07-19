import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
import { NgForm } from '@angular/forms';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'notify-form',
  templateUrl: './notify-form.component.html',
  styleUrls: ['./notify-form.component.css']
})
export class NotifyFormComponent implements OnInit {
  
  supervisors : any[] = [];
  constructor(private service: NotifyService) {
  }

  ngOnInit(): void {
    this.service.getSupervisors()
      .subscribe(response => {
        this.supervisors = response;
      }, (error: AppError) => {

        if (error instanceof NotFoundError) {
          alert(error.origError().statusText);
        }   
        else
          alert("An unexpected error. Fail to load supervisos info.");

      });
  }

  log(x: any) {console.log(x)}

  submit(f: NgForm) {
    
    let post = {
      firstName: f.value.firstName,
      lastName: f.value.lastName,
      emailAddress: f.value.emailAddress,
      phoneNumber: f.value.phoneNumber,
      supervisor: f.value.supervisors
    };

    this.service.postSupervisor(post)
      .subscribe(response => {
        f.resetForm();
        alert("Success!!");
      }, (error: AppError) => {

        if (error instanceof BadInput) {
          alert(error.origError().statusText + "\n" + error.origError.error);
        }   
        else
          alert("An unexpected error.");

      });
  }

}
