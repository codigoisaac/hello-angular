import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  message = signal('Passed this message from Home to Greeting.');

  handleKeyUp(event: KeyboardEvent) {
    console.log(`You typed ${event.key}, don't you!`);
  }
}
