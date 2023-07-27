import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css'],
})
export class LineGraphComponent {
  public lineChartData: any[] = [
    { data: [2, 1.5, 2.2, 3], label: 'Fruit Prices' },
    { color: [{ borderColor: 'white' }] },
  ];
  public lineChartLabels: string[] = ['Apple', 'Banana', 'Orange', 'Grapes'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      borderColor: 'blue',
      pointBackgroundColor: 'blue',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  //this.chartColors = [{ borderColor: 'white' }];
}
