import { Injectable } from '@angular/core';
import { TodoType } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: Array<TodoType> = [
    {
      id: 1,
      userId: 1,
      title: 'Learn Angular',
      isCompleted: false,
    },
    {
      id: 2,
      userId: 1,
      title: 'Learn React Native',
      isCompleted: false,
    },
    {
      id: 3,
      userId: 1,
      title: 'Learn AWS',
      isCompleted: false,
    },
    {
      id: 3,
      userId: 1,
      title: 'Learn Laravel',
      isCompleted: false,
    },
  ];

  constructor() {}
}
