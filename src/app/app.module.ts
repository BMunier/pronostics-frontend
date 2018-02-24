import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from "./core/app.routing.module";
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './layout/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }