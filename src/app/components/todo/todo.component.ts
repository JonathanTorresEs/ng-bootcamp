import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {MainService} from '../../services/mainservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem: Todo;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
  }

  getStrikeThrough() {
    if (this.todoItem.completed) {
      return 'line-through';
    } else {
      return 'none';
    }
  }

  toggleComplete() {
    this.todoItem.completed = !this.todoItem.completed;
  }

  deleteTodoItem() {
    this.mainService.deleteToDo(this.todoItem.id);
  }

}
