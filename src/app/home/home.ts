import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  message = signal('Passed this message from Home to Greeting.');

  handleKeyUp(event: KeyboardEvent) {
    console.log(`You typed ${event.key}, don't you!`);
  }
}
