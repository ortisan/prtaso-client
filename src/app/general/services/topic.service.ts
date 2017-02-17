/**
 * Created by marcelo on 30/01/17.
 */
import {Injectable} from "@angular/core";
import {Topic} from "../models";
import {Observable} from "rxjs/Rx";
import {ApiService} from "./api.service";

@Injectable()
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  save(topic: Topic): Observable <Topic> {
    return this.apiService.post("/topic", topic);
  }

}


