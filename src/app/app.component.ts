import {Component} from '@angular/core';

import * as $ from 'jquery'

(<any>window).jQuery = $;
(<any>window).$ = $;

import * as Tether from 'tether';

(<any>window).Tether = Tether;


import 'tether/dist/css/tether.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../public/css/styles.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
}
