import {Component, OnInit} from "@angular/core";
import {TopicService} from "./topic.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Topic} from "../shared/models/topic.model";
import * as moment from 'moment'

@Component({
  selector: 'topic-form',
  templateUrl: 'topic.form.component.html'
})
export class TopicFormComponent implements OnInit {

  private topic: Topic = new Topic();
  private topicForm: FormGroup;
  private hasErrors: boolean;


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
        sendDate: [moment(this.topic.sendDate).format("YYYY-MM-DDThh:mm")],
        message: [this.topic.message, Validators.required],
      });
    });
  }

  onSaveOrUpdate(event: any) {
    return this.topicService.save(this.topicForm.value).subscribe((topic: Topic) => {
      this.router.navigate(['/topics']);
      this.hasErrors = false;
    }, (error) => this.hasErrors = true);
  }

  gotoTopic() {
    this.router.navigate(["/topic"])
  }

}
