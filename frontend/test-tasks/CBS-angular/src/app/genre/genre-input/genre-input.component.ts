import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { setOfGenre } from './../genre';

@Component({
  selector: 'app-genre-input',
  templateUrl: './genre-input.component.html',
  styleUrls: ['./genre-input.component.scss'],
})
export class GenreInputComponent implements OnInit {
  genreForm__input: FormGroup;
  formErrors: string;
  validationMessages = {
    required: 'Обязательное поле.',
    digit: 'Цифры не допустимы.',
    contains: 'Уже есть такой жанр.',
    minlength: 'Значение должно быть не менее 4х символов.',
    maxlength: 'Значение не должно быть больше 15 символов.',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.genreForm__input = this.fb.group({
      genre: [
        '',
        [
          Validators.required,
          validationGenre,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });

    this.genreForm__input.valueChanges.subscribe((data) =>
      this.onValueChange(data)
    );

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.genreForm__input) return;
    let form = this.genreForm__input;

    this.formErrors = '';
    let control = form.get('genre');

    if (control && control.dirty && !control.valid) {
      for (let key in control.errors) {
        this.formErrors += this.validationMessages[key] + ' ';
      }
    }
  }

  onSubmit() {
    setOfGenre.add(this.genreForm__input.value.genre);
    localStorage.setItem('setOfGenre', JSON.stringify(Array.from(setOfGenre)));
  }
}

function validationGenre(formControl: FormControl): null | {} {
  const inputValue = formControl.value;
  if (/[\d_]/.test(inputValue)) {
    return { digit: '' };
  }
  if (setOfGenre.has(inputValue)) {
    return { contains: '' };
  } else {
    let err: null | {} = null;
    for (let value of setOfGenre) {
      if (
        (value.toLowerCase().includes(inputValue.toLowerCase()) &&
          inputValue.length >= 4) ||
        (inputValue.toLowerCase().includes(value.toLowerCase()) &&
          inputValue.length >= 4)
      ) {
        err = { contains: '' };
        break;
      }
    }
    return err;
  }
}
