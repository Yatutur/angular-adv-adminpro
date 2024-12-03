import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: false,

  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    //this.returnObservable().pipe(
    //  retry(2)
    //).subscribe(valor => console.log('Subs: ' , valor),
    //  error => console.log(error),
    //  () => console.info('Observable finished')
    //);

    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(200)
      .pipe(
        //take(10),
        map(value => value + 1),
        filter(value => (value % 2 === 0)),
      );
  }

  returnObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const interval = setInterval( () => {

        i++;
        observer.next(i);

        if (i===4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i is equal to 2');
        }
      }, 1000)
    });

  }
}
