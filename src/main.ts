import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Dashboard } from './app/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Dashboard],
  template: `
    <app-dashboard></app-dashboard>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
