import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    testing
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
