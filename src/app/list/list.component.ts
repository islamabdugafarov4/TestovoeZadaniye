import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {User} from "../models/user";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user:User[]=[];
  start: number=0;
  end: number=3;


  constructor(private api: ApiService) {


  }


  ngOnInit() {
this.api.getUsers().subscribe((res:User[])=>{
  this.user = res;
});



  }

  addIndex(pageNumber){
    this.start = pageNumber*3;
    this.end = this.start+3
  }
  delete(id) {
    this.api.deleteUser(id);
  }




  getArrayFromNum(length) {
     return new Array(length).map((a,num)=>{
       return num;
     })
  }
  chooseNum(num){
   return  this.user.slice(0,num);
  }
}
