import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubmitIssueComponent } from './submitIssue/submitIssue.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'issues', component: IssuesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'submitIssue', component: SubmitIssueComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
