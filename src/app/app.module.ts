import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { TodoformComponent } from './components/todoform/todoform.component';
import {MainService} from './services/mainservice.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'todolist',
      component: ContainerComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    ContainerComponent,
    TodoformComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
