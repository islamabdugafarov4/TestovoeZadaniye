import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  title = 'TestovoeZadaniye';
  form: FormGroup;
  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient) { }
  onSubmit(form){
    if (form.valid) {
      this.http.post('http://localhost:3000/users/',form.value);
      this.router.navigateByUrl('list');
    }}
  ngOnInit() {
    this.form = this.formbuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      specialization:['',[Validators.required]],
      patronimyc:[''],
      phone:['',[Validators.required]]
    });
  }

}
