/**
 * Created by marcelo on 30/01/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {Topic} from "../models/topic.model";
import {TOPICS} from "./mock.topic";

@Injectable()
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  save(topic: Topic): Observable <Topic> {
    return this.apiService.post("/topic", topic);
  }

  getTopics(): Observable<Topic> {
    return Observable.from(TOPICS);
  }

}


