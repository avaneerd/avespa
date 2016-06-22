import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutSomethingComponent } from './aboutSomething.component';
import { WeatherComponent } from './weather.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutSomethingComponent },
  { path: 'weather', component: WeatherComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];