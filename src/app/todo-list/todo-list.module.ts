// todo-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [CommonModule],
})
export class TodoListModule {}
