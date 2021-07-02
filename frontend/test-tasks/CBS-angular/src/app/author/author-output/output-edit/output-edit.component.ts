import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { output, authorsProcess, obs, Author } from '../../author';

@Component({
  selector: 'app-output-edit',
  templateUrl: './output-edit.component.html',
  styleUrls: ['./output-edit.component.scss'],
})
export class OutputEditComponent implements OnInit {
  authorForm: FormGroup;
  author: Author = obs.author;

  formErrors = {
    surname: '',
    name: '',
    patronymic: '',
    dp: '',
  };

  validationMessages = {
    name: {
      required: 'Обязательное поле.',
      minlength: 'Значение должно быть не менее 4х символов.',
      maxlength: 'Значение не должно быть больше 15 символов.',
      digit: 'Цифры не допустимы.',
    },
    surname: {
      required: 'Обязательное поле.',
      minlength: 'Значение должно быть не менее 4х символов.',
      maxlength: 'Значение не должно быть больше 15 символов.',
      digit: 'Цифры не допустимы.',
    },
    patronymic: {
      required: 'Обязательное поле.',
      minlength: 'Значение должно быть не менее 4х символов.',
      maxlength: 'Значение не должно быть больше 15 символов.',
      digit: 'Цифры не допустимы.',
    },
    dp: {
      required: 'Обязательное поле.',
      ngbDate: 'Неверный формат даты. Нужный формат: ГГГГ-ММ-ДД',
    },
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.authorForm = this.fb.group({
      name: [this.author.name, [Validators.required, validation]],
      surname: [this.author.surname, [Validators.required, validation]],
      patronymic: [this.author.patronymic, [validation]],
      dp: [convertDate(this.author.birthday), [Validators.required]],
    });

    this.authorForm.valueChanges.subscribe((data) => this.onValueChange(data));

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.authorForm) return;
    let form = this.authorForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.authorForm.value);
  }

  close() {
    authorsProcess.setToLStorage();
    output.toDefault();
  }
}

function convertDate(date) {
  date = new Date(date);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
}

function validation(formControl: FormControl): null | {} {
  const inputValue = formControl.value;

  if (/[\d_]/.test(inputValue)) {
    return { digit: '' };
  }

  if (typeof inputValue === 'string') {
    if (inputValue.length > 0 && inputValue.length < 4) {
      return { minlength: '' };
    }
    if (inputValue.length > 15) {
      return { maxlength: '' };
    }
  }
}
