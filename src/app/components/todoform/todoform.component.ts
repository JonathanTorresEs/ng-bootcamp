import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/mainservice.service';
import { Todo } from '../../interfaces/todo';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { validators } from '../../utils/util';
import { errors } from '../../utils/errorMsg';


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

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: '',
      task: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [validators.customValidator]],
      password: [''],
      confirmPassword: ['']
    }, {
      validators: [validators.passwordMatch]
    });
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get task(): AbstractControl {
    return this.form.get('task');
  }

  addNewTask({ valid, value }: {valid: boolean, value: string }): void {
    if (valid) {
      const toDo = new Todo(value);
      this.mainService.addNewToDo(toDo);
      this.form.reset();
    }
  }

  getErrorMessage(control: AbstractControl): string | null {
    for (const propertyErrorName in control.errors) {
      if (control.errors.hasOwnProperty(propertyErrorName)) {
        return errors[propertyErrorName];
      }
    }
    return null;
  }
}
