import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { NewTutorialsComponent2 } from './tutorials/new-tutorials2.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'tutorials', component: TutorialsComponent
  ]}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, LogoutComponent, TutorialsComponent, NewTutorialsComponent2 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
