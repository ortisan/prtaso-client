import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `

<div class="container">
    <h1>{{title}}</h1>
    <nav>
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