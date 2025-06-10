import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterValue = signal(0);

  increment() {
    // this.counterValue.set(this.counterValue() + 1);
    this.counterValue.update((val: number): number => val + 1);
  }

  decrement() {
    this.counterValue.update((val: number): number => val - 1);
  }

  reset() {
    this.counterValue.set(0);
  }
}
