import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/mainservice.service';
import { Todo } from '../../interfaces/todo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  // form = new FormControl('', [Validators.maxLength(10), Validators.required]);
  form: FormGroup;

  constructor(
    private mainService: MainService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      title: '',
      task: ['', [Validators.maxLength(10), Validators.required]]
    });
  }

  addNewTask({ valid, value }: {valid: boolean, value: string }) {
    if (valid) {
      const toDo = new Todo(value);
      this.mainService.addNewToDo(toDo);
      this.form.reset();
    }
  }

}
