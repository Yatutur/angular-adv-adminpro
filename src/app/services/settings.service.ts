import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public elementTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || '/css/colors/purple.css';

    if (url && this.elementTheme) {
      this.elementTheme.setAttribute('href', url);
    }
  }

  changeTheme( theme: string) {
    const url = `/css/colors/${ theme }.css`;
    if (this.elementTheme) {
      this.elementTheme.setAttribute('href', url);
    }
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach(element => {

      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `/css/colors/${btnTheme}.css`;
      if (this.elementTheme) {
        const currentThemeUrl = this.elementTheme.getAttribute('href');
        if (btnThemeUrl === currentThemeUrl) {
          element.classList.add('working');
        }
      }
    });
  }
}
