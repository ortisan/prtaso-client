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
import {TopicComponent} from "./topic/topic.component";
import {HeaderComponent} from "./shared/layout/header.component";
import {JwtService} from "./shared/services/jwt.service";
import {ApiService} from "./shared/services/api.service";
import {UserService} from "./shared/services/user.service";
import {FooterComponent} from "./shared/layout/footer.component";
import {TopicService} from "./shared/services/topic.service";


const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'topic', component: TopicComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [BrowserModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, RegisterComponent, SigninComponent, TopicComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, JwtService, UserService, TopicService]
})
export class AppModule {
}

