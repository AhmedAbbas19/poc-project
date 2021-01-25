import { Component, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  @Input("chartdata") barChartData: ChartDataSets[];
  @Input("chartlabels") barChartLabels: Label[];
  @Input("chartoptions") barChartOptions: (ChartOptions & { annotation: any });
  @Input("height") height: string;

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor(){}

}
