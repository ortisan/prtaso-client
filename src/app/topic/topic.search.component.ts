import {Component, OnInit} from "@angular/core";
import {TopicService} from "../shared/services/topic.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Topic} from "../shared/models/topic.model";


@Component({
  selector: 'topic-list',
  templateUrl: 'topic.search.component.html'
})
export class TopicSearchComponent implements OnInit {

  topics: Observable<Topic>;

  ngOnInit(): void {
  }

  constructor(private topicService: TopicService, private formBuilder: FormBuilder) {
  }

  public topicForm = this.formBuilder.group({
    title: ['', Validators.required],
    sendDate: ['', Validators.required],
    message: ['', Validators.required],
  });

  save(event: any) {
    return this.topicService.save(this.topicForm.value)
  }

  search() {
    this.topics = this.topicService.getTopics()
  }
}
