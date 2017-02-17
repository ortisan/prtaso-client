"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var topic_service_1 = require("../general/services/topic.service");
var forms_1 = require("@angular/forms");
var TopicComponent = (function () {
    function TopicComponent(topicService, formBuilder) {
        this.topicService = topicService;
        this.formBuilder = formBuilder;
        this.topicForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            sendDate: ['', forms_1.Validators.required],
            message: ['', forms_1.Validators.required],
        });
    }
    TopicComponent.prototype.save = function (event) {
        return this.topicService.save(this.topicForm.value);
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    core_1.Component({
        selector: 'topic',
        templateUrl: 'topic.component.html'
    }),
    __metadata("design:paramtypes", [topic_service_1.TopicService, forms_1.FormBuilder])
], TopicComponent);
exports.TopicComponent = TopicComponent;
//# sourceMappingURL=topic.component.js.map