import { Injectable } from '@angular/core';
import { Task } from '../item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {

  constructor(private storageService: StorageService) {}

  getTodoList() {
    return this.storageService.get();
  }

  addItem(task: Task) {
    this.storageService.post(task);
  }
}
