import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../components/app.component";
import {TopicComponent} from "../components/topic.component";
import {PageNotFoundComponent} from "../components/pagenotfound.component";
import {HomeComponent} from "../components/home.component";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'topic', component: TopicComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, TopicComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}