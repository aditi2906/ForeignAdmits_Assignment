import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../item';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {

  todoForm: FormGroup | any;

  items: Task[] = [];
  done: Task[] = [];
  taskDate: any;

  constructor(
    private fb: FormBuilder,
    private ts: TodoListService
  ) {}

  ngOnInit(): void {
    this.taskDate = new Date();
    this.todoForm = this.fb.group({
      item: ['', '', '', Validators.required],
      date: ['', '', '', Validators.required],
      time: ['', '', '', Validators.required]
    });
    this.items = this.ts.getTodoList();
  }

  addItem(description: string, taskDate: any, taskTime: any) {
    const newItem: Task = {
      description: description,
      date: taskDate,
      time: taskTime,
      done: false
    };
    this.ts.addItem(newItem);
    this.items = this.ts.getTodoList();
  }

  deleteItem(item: any) {
    this.items.splice(item, 1);
  }

  deleteDoneItem(item: any) {
    this.done.splice(item, 1);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
