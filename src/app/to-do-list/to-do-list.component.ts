import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  
  todoForm: FormGroup | any;

  items: Item[] = [
    
  ];
  done: Item[] = [];
  TaskDate:  any;
  TaskTime:  any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.TaskDate = new Date();
    this.todoForm = this.fb.group({
      item: ['','','',Validators.required],
    });
    
  
  }

  addItem(description: string, TaskDate:any, TaskTime:any) {
    this.items.unshift({
      description,
      TaskDate,
      TaskTime,
      done: false,
    });
  }

  deleteItem(item: any) {
    this.items.splice(item, 1);
  }

  deleteDoneItem(item: any) {
    this.done.splice(item, 1);
  }

  drop(event: CdkDragDrop<Item[]>) {
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
