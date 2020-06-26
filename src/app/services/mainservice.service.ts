import { Injectable } from '@angular/core';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private toDoList: Todo[] = [];
  lastId: number;

  constructor() {
   }

  getTodos() {
    this.toDoList = [
      {
        id: 1,
        task: 'Have a class',
        completed: true
      },
      {
        id: 2,
        task: 'Attend to the meetings',
        completed: false
      }
    ];
    return this.toDoList;
  }

  addNewToDo(newToDo: Todo) {
    this.lastId = (this.toDoList.length) ? +this.toDoList[this.toDoList.length - 1].id : 0;
    if (!newToDo.id) {
      newToDo.id = ++this.lastId;
    }
    newToDo.task = newToDo.task.trim();
    this.toDoList.push(newToDo);
  }

  deleteToDo(id) {
    const index = id - 1;
    this.toDoList[index] = null;
  }

}
