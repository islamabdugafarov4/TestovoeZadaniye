import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user:User[];
  pagination:any;
  collection ={count:15,data:[]};
  fname;lname;pat;phone;info;spec;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  switch: any;
  pageChange(event){
    this.pagination.currentPage = event;
  }
  constructor() {
    this.pagination ={
    itemsPerPage:5,
    currentPage:1,
    totalItems:this.collection.count
  };}

  ngOnInit() {
  }

}
