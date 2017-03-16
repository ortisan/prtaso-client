import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TopicSearchComponent} from "./topic.search.component";
import {TopicDetailComponent} from "./topic.detail.component";
import {TopicFormComponent} from "./topic.form.component";
import {TopicService} from "./topic.service";
import {BrowserModule} from "@angular/platform-browser";

const topicRoutes: Routes = [
  {path: 'topic', component: TopicSearchComponent},
  {path: 'topic/:id', component: TopicDetailComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(topicRoutes)],
  declarations: [TopicSearchComponent, TopicDetailComponent, TopicFormComponent],
  providers: [TopicService],
  exports: [RouterModule]
})
export class TopicModule {
}
