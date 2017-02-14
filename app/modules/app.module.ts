import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../components/app.component";
import {RegisterComponent} from "../components/register.component";
import {SigninComponent} from "../components/signin.component";
import {TopicComponent} from "../components/topic.component";
import {PageNotFoundComponent} from "../components/pagenotfound.component";
import {HomeComponent} from "../components/home.component";
import {TopicListComponent} from "../components/topic.list.component";
import {TopicFormComponent} from "../components/topic.form.component";
import {TopicService} from "../services/topic.service";
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