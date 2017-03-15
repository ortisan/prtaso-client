import {Component, OnInit} from "@angular/core";
import {TopicService} from "./topic.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Topic} from "../shared/models/topic.model";
import {Router} from "@angular/router";


@Component({
  selector: 'topic-search',
  templateUrl: 'topic.search.component.html'
})
export class TopicSearchComponent implements OnInit {

  private topics: Topic[];

  ngOnInit(): void {
    this.getAll();
  }

  constructor(private router: Router,
              private topicService: TopicService,
              private formBuilder: FormBuilder) {
  }

  public topicForm = this.formBuilder.group({
    title: ['', Validators.required],
    sendDate: ['', Validators.required],
    message: ['', Validators.required],
  });

  select(topic: Topic) {
    console.log(`/topics/${topic.id}`);
    this.router.navigate(["/topics/detail", topic.id])
  }

  new() {
    this.router.navigate(["/topics/new"])
  }

  getAll() {
    this.topicService.getTopics().subscribe((topics: Topic[]) => this.topics = topics);
  }
}
