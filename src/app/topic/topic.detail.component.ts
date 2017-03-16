import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {TopicService} from "./topic.service";
import {Topic} from "../shared/models/topic.model";
import {Location} from "@angular/common";

@Component({
  selector: "topic-detail",
  templateUrl: "topic.detail.component.html"
})
export class TopicDetailComponent implements OnInit {

  private topic: Topic;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topic = new Topic();
    console.log(`${this.route.params}`);
    this.route.params.subscribe(params => {
      let id = +params["id"];
      this.topicService.getTopic(id).subscribe((topic: Topic) => this.topic = topic);
    });
  }

  edit() {
    this.router.navigate(['/topics/edit', this.topic.id]);
  }

  back() {
    this.location.back();
  }

  gotoTopic() {
    this.router.navigate(['/topics']);
  }

}
