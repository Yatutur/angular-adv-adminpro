import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncreaserComponent } from './increaser/increaser.component';
import { DoughnutComponent } from './donut/doughnut.component';
import { BaseChartDirective } from 'ng2-charts';


@NgModule({
  declarations: [
    IncreaserComponent
  ],
  exports: [
    IncreaserComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
