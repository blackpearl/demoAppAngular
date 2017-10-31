import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { KittenComponent } from './kitten/kitten.component';
import { SolarComponent } from './solar/solar.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';

import { ChartjsPieComponent } from './charts/chartjs-pie.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule, NgxChartsModule, ChartModule
  ],
  declarations: [
    DashboardComponent,
    KittenComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    ChartjsPieComponent,
  ],
})
export class DashboardModule { }
