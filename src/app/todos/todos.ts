import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { TodoType } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<TodoType>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
