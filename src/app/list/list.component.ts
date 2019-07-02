import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user: Observable<User[]>;


  constructor(private api: ApiService) {


  }


  ngOnInit() {
    this.user = this.api.onGetUsers();


  }


  onDelete(id: number) {
    this.api.onDeleteUser(id);
  }

}
