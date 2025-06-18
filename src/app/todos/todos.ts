import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { TodoType } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
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

  updadeTodoItem(todoItem: TodoType) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    });
  }
}
