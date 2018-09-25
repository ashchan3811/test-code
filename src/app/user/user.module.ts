import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ],
  declarations: [UsersComponent]
})
export class UserModule { }
