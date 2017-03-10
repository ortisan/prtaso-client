/**
 * Created by marcelo on 30/01/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "../shared/services/api.service";
import {Topic} from "../shared/models/topic.model";
import {TOPICS} from "../shared/services/mock.topic";

@Injectable()
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  save(topic: Topic): Observable <Topic> {
    return this.apiService.post("/topic", topic);
  }

  getTopics(): Observable<Topic[]> {
    return this.apiService.get("/topic");
  }

  getTopic(id: number): Observable<Topic> {
    return this.apiService.get(`/topic/${id}`);
  }

}


