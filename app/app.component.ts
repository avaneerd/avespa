import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { HomeComponent } from './home.component';
import { AboutSomethingComponent } from './aboutSomething.component';
import { WeatherComponent } from './weather.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ NavigationComponent, ROUTER_DIRECTIVES ] 
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutSomethingComponent },
  { path: '/weather', component: WeatherComponent }
])
export class AppComponent { }
