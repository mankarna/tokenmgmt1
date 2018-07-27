import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
 

import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import {TokenService} from './token.service';


@NgModule({
  declarations: [
    AppComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
