// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListModule } from './todo-list/todo-list.module';

@Component({
  selector: 'app-root',  standalone: true,
  imports: [CommonModule, TodoListModule], 
  template:`
    <main>

<section class="content">
<app-todo-list></app-todo-list>

</section>
</main>
  `,
 // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}

