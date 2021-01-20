import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './components/personne/personne.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneService } from './services/personne.service';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';

  const routes: Routes = [
    { path: 'list', component: ListComponent},
    {path: 'new', component: PersonneComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path:'edit/:id', component: UpdateComponent},
    {path:'show/:id', component: DetailsComponent}

  ]
@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ListComponent,
    UpdateComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DetailsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
