import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title }}!</h1>

    <p>Let's do it!</p>

    <router-outlet />
  `,
  styles: [
    `
      p {
        background: red;
      }
    `,
  ],
})
export class App {
  protected title = 'Angular';
}
