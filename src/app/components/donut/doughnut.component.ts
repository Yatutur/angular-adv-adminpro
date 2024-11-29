import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  standalone: true,

  templateUrl: './doughnut.component.html',
  styles: ``,
  imports: [BaseChartDirective]
})
export class DoughnutComponent {
  // Doughnut
  @Input('labels') doughnutChartLabelsInput: string[] = [
    'Label 01',
    'Label 02',
    'Label 03',
  ];
  @Input('data') doughnutChartDataInput: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabelsInput,
    datasets: [
      { data: [450, 250, 200],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']},
    ],
  };

  @Input() title: string = 'No title';
}
