import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userDetails: User;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.userDetails = this.activatedRoute.snapshot.data[0] as User;
  }
}
