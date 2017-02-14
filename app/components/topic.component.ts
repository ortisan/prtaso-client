import {Component} from "@angular/core";
import {TopicService} from "../services/topic.service";
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
                    <label for="name">Name</label>
                    <input class="form-control" id="name" formControlName="name" type="text" placeholder="Topic name">
                </div>
                
                <div class="form-group">
                    <label for="username">Description</label>
                    <textarea class="form-control" id="description" formControlName="description" rows="3"></textarea>
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
        name: ["", Validators.required],
        description: ["", Validators.required],
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