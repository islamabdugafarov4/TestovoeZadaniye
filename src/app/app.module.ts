import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {AppRouterModule} from "./app.router.module";



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRouterModule
  ],
  providers: [HttpClientModule,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
