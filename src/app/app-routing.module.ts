import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {AppComponent, LoginComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
