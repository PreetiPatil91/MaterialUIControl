import { Component, OnInit } from '@angular/core';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  weatherData: WeatherData[] = [
    { city: 'New York', temperature: 25, description: 'Sunny' },
    { city: 'London', temperature: 18, description: 'Cloudy' },
    { city: 'Tokyo', temperature: 30, description: 'Partly Cloudy' },
    { city: 'Sydney', temperature: 22, description: 'Rainy' },
  ];

  newWeatherData: WeatherData = {
    city: '',
    temperature: 0,
    description: '',
  };

  addWeatherData(): void {
    this.weatherData.push({ ...this.newWeatherData });
    this.clearForm();
  }

  clearForm(): void {
    this.newWeatherData.city = '';
    this.newWeatherData.temperature = 0;
    this.newWeatherData.description = '';
  }
}
