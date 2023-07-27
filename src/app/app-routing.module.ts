import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'fileupload-path', component: FileUploadComponent },
      { path: 'grid-path', component: GridComponent },
      { path: 'chart-path', component: ChartComponent },
      { path: 'line-graph', component: LineGraphComponent },
      { path: 'doughnut-path', component: DoughnutChartComponent },
      { path: 'form-path', component: FormComponent },
      { path: '', redirectTo: 'fileupload-path', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
