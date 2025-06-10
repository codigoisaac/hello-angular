import { Component } from '@angular/core';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Home, Header],
  template: `
    <app-header />

    <main>
      <app-home />
    </main>
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
