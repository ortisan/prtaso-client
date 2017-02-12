import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../components/app.component";
import {LoginComponent} from "../components/login.component";
import {TopicComponent} from "../components/topic.component";
import {PageNotFoundComponent} from "../components/pagenotfound.component";
import {HomeComponent} from "../components/home.component";
import {TopicListComponent} from "../components/topic.list.component";
import {TopicFormComponent} from "../components/topic.form.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'topic', component: TopicComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, LoginComponent, HomeComponent, TopicComponent, TopicListComponent, TopicFormComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}