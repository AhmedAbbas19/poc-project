import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgSwipperModule} from "./ngSwipper.module"


@NgModule({
  declarations: [LineChartComponent, BarChartComponent, RadarChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    NgxDatatableModule,
  ],
  exports: [LineChartComponent, BarChartComponent, RadarChartComponent, NgxDatatableModule, CommonModule, NgSwipperModule]
})
export class SharedModule { }
