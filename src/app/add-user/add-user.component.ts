import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {Subscription} from "rxjs";
import {User} from "../models/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  title = 'TestovoeZadaniye';
  form: FormGroup;
  id:number;
  private routeSubscription:Subscription;
  private querySubscription:Subscription;
  user:User;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute) {
  }

  onUpdateUser() {
    this.api.onUpdateUser(this.activatedRoute.snapshot.paramMap.get('id'), this.form.value);
    this.routeSubscription = this.activatedRoute.params.subscribe(params =>this.id = params['id']);
    this.querySubscription = this.activatedRoute.queryParams.subscribe((queryparam:any)=>{
      this.user.info= queryparam['info'];
      this.user.firstName= queryparam['firstName'];
      this.user.lastName= queryparam['lastName'];
      this.user.patronimyc= queryparam['patronimyc'];
      this.user.phone= queryparam['phone'];
      this.user.specialization= queryparam['specialization'];
    })
  }

  ngOnInit() {
    this.form = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      specialization: ['', [Validators.required]],
      patronimyc: [''],
      phone: ['+7', [Validators.required]],
      info: [''],
    });
  }

  onReturnFN(name: string) {
    return this.form.controls[name];
  }

  onSubmit() {
    this.api.onAddUser(this.form.value);
  }
}
