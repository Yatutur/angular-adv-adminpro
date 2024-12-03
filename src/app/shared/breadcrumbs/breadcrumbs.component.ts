import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: false,

  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = '';
  public titleSubs$: Subscription;

  constructor(private router: Router/*, private activatedRoute: ActivatedRoute*/) {

    //console.log(activatedRoute.snapshot.children[0].data);

    this.titleSubs$ = this.getDataRouter()
      .subscribe(({ title }) => {
        this.title = title;
        document.title = `AdminPro - ${ title }`;
      });
  }

  getDataRouter() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        // this is using the pages.routing.ts -> data { title } argument, to draw the page's titles
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

  ngOnDestroy() {
    this.titleSubs$.unsubscribe();
  }
}
