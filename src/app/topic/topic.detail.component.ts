import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {TopicService} from "./topic.service";
import {Topic} from "../shared/models/topic.model";
@Component({
  selector: "topic-detail",
  templateUrl: "topic.detail.component.html"
})
export class TopicDetailComponent implements OnInit {

  private topic: Topic;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.topicService.getTopic(+params["id"])).subscribe((topic: Topic) => this.topic = topic);
  }

  gotoTopic() {
    this.router.navigate(['/topic']);
  }


}
