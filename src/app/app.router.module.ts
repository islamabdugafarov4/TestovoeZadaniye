import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AddUserComponent},
  {path: 'home/:id', component: AddUserComponent},
  {path: 'list', component: ListComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
