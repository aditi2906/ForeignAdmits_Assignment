import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
  })

export class StorageService {
  key: any;
  private todoList: any;

  constructor() { }

  getData(key: String) {
    return  this.key = JSON.parse(localStorage.getItem('currentUser')!);

  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
