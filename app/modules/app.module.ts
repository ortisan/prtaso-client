import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {RegisterComponent} from "../auth/register.component";
import {SigninComponent} from "../auth/signin.component";
import {TopicComponent} from "../topic/topic.component";
import {PageNotFoundComponent} from "../errors/pagenotfound.component";
import {HomeComponent} from "../home/home.component";
import {TopicListComponent} from "../topic/topic.list.component";
import {TopicFormComponent} from "../topic/topic.form.component";
import {TopicService} from "../topic/topic.service";
import {UserService} from "../services/user.service";

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
    declarations: [AppComponent, RegisterComponent, SigninComponent, HomeComponent, TopicComponent, TopicListComponent, TopicFormComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [UserService, TopicService]
})
export class AppModule {
}