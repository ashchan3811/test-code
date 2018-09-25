import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private base_url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    const url = `${this.base_url}/users`;

    return this.httpClient.get<User[]>(url);
  }
}
