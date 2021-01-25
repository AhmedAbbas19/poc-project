import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @Input("chartdata") radarChartData: ChartDataSets[];
  @Input("chartlabels") radarChartLabels: Label[];
  @Input("chartoptions") radarChartOptions: RadialChartOptions;
  @Input("height") height: string;
public radarChartType: ChartType = 'radar';

constructor() { }

  ngOnInit(): void {
  }

}
