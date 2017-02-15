import {Component} from "@angular/core";
import {TopicService} from "./topic.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Topic} from "../models/models";
@Component({
    selector: 'topic',
    template: `
        <h1>Topic</h1>
        
        <div class="container">
            <form [formGroup]="topicForm" (ngSubmit)="doSave($event)">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input class="form-control" id="title" formControlName="title" type="text" placeholder="Topic title">
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" formControlName="message" rows="3"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="sendDate">Send Date</label>
                    <input class="form-control" id="sendDate" formControlName="sendDate" type="datetime" placeholder="Send Date">
                </div>
                
                <button type="submit" class="btn btn-default">Save</button>
            </form>
        </div>
`
})
export class TopicComponent {

    constructor(private topicService: TopicService, private router: Router, private formBuilder: FormBuilder) {
    }

    public topicForm = this.formBuilder.group({
        title: ["", Validators.required],
        sendDate: ["", Validators.required],
        message: ["", Validators.required],
    });

    doSave(event) {
        this.topicService.postSave(this.topicForm.value).subscribe(
            (topic: Topic) => {
                console.log("sucesso");
                // this.router.navigateByUrl("/topic");
            },
            err => {
                console.log(err);
            });
    }

}