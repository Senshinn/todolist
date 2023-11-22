import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(newTodo: string, inputField: HTMLInputElement) {
    if (newTodo.trim() !== '') {
      this.todos.push({ task: newTodo, completed: false });
      inputField.value = ''; 
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
