import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {
  progress01: number = 25;
  progress02: number = 35;

  get getProgress01() {
    return `${ this.progress01 }%`;
  }

  get getProgress02() {
    return `${ this.progress02 }%`;
  }
}
