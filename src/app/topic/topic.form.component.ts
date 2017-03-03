import {Component, OnInit} from "@angular/core";
import {TopicService} from "./topic.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Topic} from "../shared/models/topic.model";


@Component({
  selector: 'topic-form',
  templateUrl: 'topic.form.component.html'
})
export class TopicFormComponent implements OnInit {

  private topic: Topic = new Topic();
  private topicForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.topicService.getTopic(+params["id"])).subscribe((topic: Topic) => {
      this.topic = topic;
      this.topicForm = this.formBuilder.group({
        id: [this.topic.id, Validators.required],
        title: [this.topic.title, Validators.required],
        sendDate: [this.topic.sendDate, Validators.required],
        message: [this.topic.message, Validators.required],
      });
    });
  }

  onSaveOrUpdate(event: any) {
    return this.topicService.save(this.topicForm.value)
  }

  gotoTopic() {
    this.router.navigate(["/topic"])
  }

}
