import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {MainService} from '../../services/mainservice.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  toDoList: Todo[] = [];

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList() {
    this.toDoList = this.mainService.getTodos();
  }

}
