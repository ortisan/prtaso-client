import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `

<div class="container">
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/register">Register</a>
        <a routerLink="/signin">Sign in - DEV</a>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/topic">Tópicos</a>
    </nav>
    
    <router-outlet></router-outlet>
</div>

`
})
export class AppComponent {
    title = 'PRTASO';
}