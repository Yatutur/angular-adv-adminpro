import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//@ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  standalone: false,

  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit{

  constructor(private settingService: SettingsService) {
  }
  ngOnInit(): void {
    customInitFunctions();
  }

}
