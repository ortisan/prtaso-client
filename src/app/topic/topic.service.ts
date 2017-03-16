/**
 * Created by marcelo on 30/01/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "../shared/services/api.service";
import {Topic} from "../shared/models/topic.model";
import {Subscription} from "../shared/models/subscription.model";

@Injectable()
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  save(topic: Topic): Observable <Topic> {
    return this.apiService.post("/topics", topic);
  }

  update(topic: Topic): Observable <Topic> {
    return this.apiService.put("/topics", topic);
  }

  getTopics(): Observable<Topic[]> {
    return this.apiService.get("/topics");
  }

  getTopic(id: number): Observable<Topic> {
    console.log(`/topics/${id}`);
    return this.apiService.get(`/topics/${id}`);
  }

  // TODO change location
  subscribe(subscription: Subscription): Observable <Subscription> {
    return this.apiService.post("/subscriptions", subscription);
  }

}


