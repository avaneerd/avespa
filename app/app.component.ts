import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavigationComponent } from './navigation.component';


@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ NavigationComponent, ROUTER_DIRECTIVES ] 
})
export class AppComponent { }
