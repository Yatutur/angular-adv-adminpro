import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  standalone: false,
  templateUrl: './increaser.component.html',
  styles: ``
})
export class IncreaserComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('progressValueInput') progress: number = 30;
  @Input() btnClass: string = 'btn-primary';

  @Output('progressValue') outputValue: EventEmitter<number> = new EventEmitter();

  changeValue( value: number ) {
    if ( this.progress >= 100 && value >= 0 ) {
      this.outputValue.emit(100);
      this.progress = 100;
    }
    if ( this.progress <= 0 && value < 0 ) {
      this.outputValue.emit(0);
      this.progress = 0;
    }
    this.progress = this.progress + value;
    this.outputValue.emit(this.progress);
  }

  onChange (newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.outputValue.emit(this.progress);
  }
}
