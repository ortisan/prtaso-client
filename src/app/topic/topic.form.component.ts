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
    this.topicForm = this.formBuilder.group({
      title: ['', Validators.required],
      sendDate: [moment(new Date()).format("YYYY-MM-DDTHH:mm"), Validators.required],
      message: ['', Validators.required],
    });

    // this.route.params.switchMap((params: Params) => this.topicService.getTopic(+params["id"])).subscribe((topic: Topic) => {
    //   this.topic = topic;
    //
    // });
  }

  onSaveOrUpdate(event: any) {

    let topicSource = new Topic();
    topicSource.title = this.topicForm.value.title;
    topicSource.message = this.topicForm.value.message;
    topicSource.sendDate = moment(this.topicForm.value.sendDate, 'YYYY-MM-DDThh:mm:ss.ms').toDate();

    return this.topicService.save(topicSource).subscribe((topic: Topic) => {
      this.router.navigate(['/topics']);
      this.hasErrors = false;
    }, (error) => this.hasErrors = true);
  }

  gotoTopic() {
    this.router.navigate(["/topics"])
  }

}
