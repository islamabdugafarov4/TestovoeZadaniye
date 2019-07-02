import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  onAddUser(form: FormGroup) {
    return this.http.post('http://localhost:3004/users', form.value);
  }

  onDeleteUser(id: number) {
    return this.http.delete('http://localhost:3004/users/' + id);
  }

  onUpdateUser(id: string, form: FormGroup) {
    return this.http.put('http://localhost:3004/users/' + id, form.value);
  }

  onGetUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3004/users');
  }
}
