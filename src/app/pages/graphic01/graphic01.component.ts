import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-graphic01',
  templateUrl: './graphic01.component.html',
  styles: [],
  standalone: false
})
export class Graphic01Component {
  graphicTitle01: string = "Testing";

  public sentLabels01: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public sentDoughnutChartData01: ChartData<'doughnut'> = {
    labels: this.sentLabels01,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']},
    ],
  };

  public sentLabels02: string[] = [
    'Bread',
    'Soda',
    'Tacos',
    'Meat'
  ];

  public sentDoughnutChartData02: ChartData<'doughnut'> = {
    labels: this.sentLabels02,
    datasets: [
      { data: [150, 150, 450, 250],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059', '#007EEF']},
    ],
  };
}
