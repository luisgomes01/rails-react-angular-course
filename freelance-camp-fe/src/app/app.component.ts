import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <h1>App file - Navigation</h1>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Freelance Bootcamp Dashboard';
}
