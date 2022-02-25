import { Injectable } from '@angular/core';
import { Item } from '../item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: Item[] = [];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Item[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  getTodoList(): Item[] {
    return this.todoList;
  }

  addItem(item: Item): void {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item:Item, changes: Item): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
  }

  deleteItem(item: Item): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
