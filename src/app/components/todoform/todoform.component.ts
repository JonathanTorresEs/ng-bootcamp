import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/mainservice.service';
import { Todo } from '../../interfaces/todo';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
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
      task: ['', [Validators.maxLength(10), Validators.required]],
      email: ['',   customValidator]
    });
  }

  addNewTask({ valid, value }: {valid: boolean, value: string }) {
    if (valid) {
      const toDo = new Todo(value);
      this.mainService.addNewToDo(toDo);
      this.form.reset();
    }
  }

    /* if ( value && value.indexOf('@') !== -1) {
      return {
        email : true
      };
    }
    return null; */
}

function customValidator(control: FormControl)
{
  console.log(control);
  const {value} = control;
  const EMAIL_REGEX = new RegExp(`^[a-z0-9%._+-]+@[a-z0-9.-]\.[a-z]{2,4}$`);

  return EMAIL_REGEX.test(value) ? null : {
    emailValid: false
  };
}
