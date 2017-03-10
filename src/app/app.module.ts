import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./errors/pagenotfound.component";
import {SigninComponent} from "./auth/signin.component";
import {RegisterComponent} from "./auth/register.component";
import {TopicFormComponent} from "./topic/topic.form.component";
import {HeaderComponent} from "./shared/layout/header.component";
import {StorageService} from "./shared/services/storage.service";
import {ApiService} from "./shared/services/api.service";
import {UserService} from "./shared/services/user.service";
import {FooterComponent} from "./shared/layout/footer.component";
import {TopicService} from "./topic/topic.service";
import {TopicSearchComponent} from "./topic/topic.search.component";
import {TopicDetailComponent} from "./topic/topic.detail.component";
import {SecurityActivate} from "./auth/security.activate";
import {DateTimePickerModule} from 'ng2-date-time-picker';
import {LoggerService} from "./shared/services/logger.service";

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'topic', component: TopicSearchComponent},
  {path: 'topic/:id', component: TopicDetailComponent},
  {path: 'topic-form', component: TopicFormComponent},
  {path: 'topic-form/:id', component: TopicFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [DateTimePickerModule, BrowserModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent, HeaderComponent, FooterComponent, RegisterComponent, SigninComponent, TopicSearchComponent, TopicDetailComponent, TopicFormComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, StorageService, UserService, TopicService, SecurityActivate, LoggerService]

})
export class AppModule {
}

