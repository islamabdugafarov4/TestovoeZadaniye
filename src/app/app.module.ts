import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";

const routes:Routes =[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:AddUserComponent},
  {path:'home/:id',component:AddUserComponent},
  {path:'list',component:ListComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [RouterModule,HttpClientModule,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
