import { Component } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent {
  public doughnutChartLabels = ['BMW', 'Ford', 'Tesla'];
  public doughnutChartData: ChartDataset[] = [{ data: [55, 25, 20] }];
  doughnutChartType: ChartType = 'doughnut';
}
