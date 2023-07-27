import { Component } from '@angular/core';
const barChartData = [
  { fruit: 'Apple', quantity: 50 },
  { fruit: 'Orange', quantity: 30 },
  { fruit: 'Banana', quantity: 70 },
  { fruit: 'Grapes', quantity: 40 },
];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  barChartData = barChartData;
}
