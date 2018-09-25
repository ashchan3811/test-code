import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { DetailsComponent } from './details/details.component';
import { UserDetailsResolve } from './details.resolve';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, UserDetailsRoutingModule, MaterialModule],
  declarations: [DetailsComponent],
  providers: [UserDetailsResolve]
})
export class UserDetailsModule {}
