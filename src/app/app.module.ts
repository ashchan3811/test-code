import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'details/:id',
        loadChildren: './user-details/user-details.module#UserDetailsModule'
      },
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      }
    ]),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
