import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  title = 'TestovoeZadaniye';
  form: FormGroup;
  constructor(private formbuilder: FormBuilder,private api:ApiService,private activatedRoute:ActivatedRoute) {
  }
  updateUser() {
    this.api.updateUser({
      firstName:this.formName('firstName').value,
      lastName:this.formName('lastName').value,
      patronimyc:this.formName('patronimyc').value,
      phone:this.formName('phone').value,
      info:this.formName('info').value,
      specialization:this.formName('specialization').value,
    },this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.form = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      specialization: ['', [Validators.required]],
      patronimyc: [''],
      phone: ['', [Validators.required]],
      info: [''],
    });
  }
 formName(name){
    return this.form.controls[name];
}
  onSubmit() {
this.api.addUser({
  firstName:this.formName('firstName').value,
  lastName:this.formName('lastName').value,
  patronimyc:this.formName('patronimyc').value,
  phone:this.formName('phone').value,
  info:this.formName('info').value,
  specialization:this.formName('specialization').value,
}
);
  }
}
