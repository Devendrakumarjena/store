import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button mat-button color="primary">Primary</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
