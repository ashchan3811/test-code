import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsResolve } from './details.resolve';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    resolve: [UserDetailsResolve],
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule {}
