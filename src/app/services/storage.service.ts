import { Injectable } from '@angular/core';
import { Task } from '../item';

const storageName = 'items';

@Injectable()
export class StorageService {
  private todoList: Task[];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)!);
  }

  private update() {
    this.todoList = JSON.parse(localStorage.getItem(storageName) || "[]");
  }

  // get items
  get() {
    return JSON.parse(localStorage.getItem(storageName) || "[]");
  }

  // add a new item
  post(item: Task) {
    let existingItemsList = [];
    existingItemsList = JSON.parse(localStorage.getItem(storageName) || "[]");
    existingItemsList.push(item);
    localStorage.setItem('items', JSON.stringify(existingItemsList));
  }

  private findItemIndex(item: any) {
    return this.todoList.indexOf(item);
  }

  // update an item
  put(item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
