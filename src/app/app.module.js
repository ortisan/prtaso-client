"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var register_component_1 = require("./auth/register.component");
var signin_component_1 = require("./auth/signin.component");
var topic_component_1 = require("./topic/topic.component");
var pagenotfound_component_1 = require("./errors/pagenotfound.component");
var home_component_1 = require("./home/home.component");
var services_1 = require("./general/services");
var services_2 = require("./general/services");
var services_3 = require("./general/services");
var services_4 = require("./general/services");
var appRoutes = [
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'topic', component: topic_component_1.TopicComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, register_component_1.RegisterComponent, signin_component_1.SigninComponent, home_component_1.HomeComponent, topic_component_1.TopicComponent, pagenotfound_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [services_3.ApiService, services_4.JwtService, services_2.UserService, services_1.TopicService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map