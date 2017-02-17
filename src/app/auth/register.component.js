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
var forms_1 = require("@angular/forms");
var services_1 = require("../general/services");
var RegisterComponent = (function () {
    function RegisterComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.registerForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    }
    RegisterComponent.prototype.doRegister = function (event) {
        this.userService.save(this.registerForm.value);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [services_1.UserService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map