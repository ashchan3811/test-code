import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class UserDetailsResolve implements Resolve<any> {
  private base_url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    const url = `${this.base_url}/users/${id}`;
    return this.http.get<User>(url);
  }
}
