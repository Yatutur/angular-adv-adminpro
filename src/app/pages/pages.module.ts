import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic01Component } from './graphic01/graphic01.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graphic01Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    Graphic01Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
