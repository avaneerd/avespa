import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    moduleId: module.id,
    providers: [WeatherService],
    templateUrl: 'weather.component.html'
})
export class WeatherComponent implements OnInit {
    weather: any;
    
    constructor(private weatherService: WeatherService) { }

    ngOnInit() {        
        this.weatherService.getWeather()
            .subscribe(w => this.weather = w);
     }

}