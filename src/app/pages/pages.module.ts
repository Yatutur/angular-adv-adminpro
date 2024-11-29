import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic01Component } from './graphic01/graphic01.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { DoughnutComponent } from '../components/donut/doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic01Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    Graphic01Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    DoughnutComponent
  ]
})
export class PagesModule { }
