import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient,private router:Router) { }
  addUser(values){
    this.http.post('http://localhost:3004/users',values).subscribe(res=>{console.log(res)});
    this.router.navigateByUrl('list');
  }
  deleteUser(id){
    this.http.delete('http://localhost:3004/users/'+id).subscribe(res=>{
      console.log('User deleted'+res.toString());
    });
    this.router.navigateByUrl('list');
  }
  updateUser(values,id){
    this.http.put('http://localhost:3004/users/'+id,values).subscribe(res=>{
      console.log("User updated"+res);
      this.router.navigateByUrl('list');
    })
  }
  getUsers(){
 return  this.http.get('http://localhost:3004/users');
  }
}
