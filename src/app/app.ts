import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header />

    <main><router-outlet /></main>
  `,
  styles: [
    `
      main {
        background: red;
        padding-inline: 16px;
        padding-block: 8px;
      }
    `,
  ],
})
export class App {
  protected title = 'Angular';
}
