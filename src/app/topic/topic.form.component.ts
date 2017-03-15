import {Component, OnInit} from "@angular/core";
import {TopicService} from "./topic.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Topic} from "../shared/models/topic.model";
import * as moment from 'moment'
import {Observable} from "rxjs";

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

    this.route.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.topicService.getTopic(id).subscribe((topic: Topic) => {
          this.topic = topic;
          this.topicForm = this.formBuilder.group({
            id: [topic.id],
            title: [topic.title || '', Validators.required],
            sendDate: [moment(topic.sendDate || new Date()).format("YYYY-MM-DDTHH:mm"), Validators.required],
            message: [topic.message || '', Validators.required],
          });
        });
      }
    });

    this.topicForm = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      sendDate: [moment(new Date()).add(5, 'days').format("YYYY-MM-DDTHH:mm"), Validators.required],
      message: ['', Validators.required],
    });

    // this.route.params.switchMap((params: Params) => this.topicService.getTopic(+params["id"])).subscribe((topic: Topic) => {
    //   this.topic = topic;
    //
    // });
  }

  onSaveOrUpdate(event: any) {
    this.topic.title = this.topicForm.value.title;
    this.topic.message = this.topicForm.value.message;
    this.topic.sendDate = moment(this.topicForm.value.sendDate, 'YYYY-MM-DDThh:mm:ss.ms').toDate();

    let topicObs: Observable<Topic> = null;

    if (this.topic.id) {
      topicObs = this.topicService.update(this.topic);
    } else {
      topicObs = this.topicService.save(this.topic);
    }

    return topicObs.subscribe((topic: Topic) => {
      this.router.navigate(['/topics']);
      this.hasErrors = false;
    }, (error) => this.hasErrors = true);
  }

  gotoTopic() {
    this.router.navigate(["/topics"])
  }

}
