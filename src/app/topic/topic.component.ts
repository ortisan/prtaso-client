import {Component} from "@angular/core";
import {TopicService} from "../general/services/topic.service";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'topic',
  templateUrl: 'topic.component.html'
})
export class TopicComponent {

  constructor(private topicService: TopicService, private formBuilder: FormBuilder) {
  }

  public topicForm = this.formBuilder.group({
    title: ['', Validators.required],
    sendDate: ['', Validators.required],
    message: ['', Validators.required],
  });

  save(event) {
    return this.topicService.save(this.topicForm.value)
  }

}
