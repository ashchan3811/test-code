import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  goToDetails(userId: number) {
    this.router.navigate(['/details', userId]);
  }
}
