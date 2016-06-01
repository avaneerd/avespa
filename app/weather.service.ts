import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    serviceUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=2755420&APPID=f9eb88412f28f3bf8e04c935b1e4034c&units=metric';
    
    constructor(private http: Http) {}
    
    getWeather() {
        return this.http.get(this.serviceUrl)
            .map(response => response.json());
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}