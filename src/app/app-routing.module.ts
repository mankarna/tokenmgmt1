import {TokenComponent} from './token/token.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
const routes: Routes = [
  {path: '', redirectTo: 'token', pathMatch: 'full'},
  {path: 'token', component: TokenComponent},
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}
