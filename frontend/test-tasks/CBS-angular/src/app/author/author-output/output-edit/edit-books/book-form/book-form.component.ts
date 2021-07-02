import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { obs, Book } from './../../../../author';
import { setOfGenre } from './../../../../../genre/genre';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Input() item;

  arrGenres = [...setOfGenre];
  bookForm: FormGroup;
  arr: Book[];

  formErrors = {
    nameOfBook: '',
    numberOfPages: '',
    genre: '',
  };

  validationMessages = {
    nameOfBook: {
      required: 'Обязательное поле.',
      minlength: 'Значение должно быть не менее 4х символов.',
      maxlength: 'Значение не должно быть больше 15 символов.',
      digit: 'Цифры не допустимы.',
    },
    numberOfPages: {
      required: 'Обязательное поле.',
      pat: 'Не правильный формат.',
    },
    genre: {
      required: 'Обязательное поле.',
    },
  };

  constructor(private fb: FormBuilder) {}

  ngDoCheck(): void {
    this.arr = obs.author.arrayOfBooks;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.bookForm = this.fb.group({
      nameOfBook: [this.item.nameOfBook, [Validators.required, validation]],
      numberOfPages: [
        this.item.numberOfPages,
        [Validators.required, vldNumPages],
      ],
      genre: [this.item.genre, [Validators.required]],
    });

    this.bookForm.valueChanges.subscribe((data) => this.onValueChange(data));

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.bookForm) return;
    let form = this.bookForm;

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
    if (this.item.id === obs.author.arrayOfBooks.length){
      obs.author.setBook(
        this.bookForm.value.nameOfBook,
        +this.bookForm.value.numberOfPages,
        this.bookForm.value.genre
      )
    }else {
      this.item.nameOfBook = this.bookForm.value.nameOfBook;
      this.item.numberOfPages = +this.bookForm.value.numberOfPages;
      this.item.genre = this.bookForm.value.genre;
    }
  }
}

function vldNumPages(formControl: FormControl): null | {} {
  const inputValue = +formControl.value;
  if (Number.isNaN(inputValue)) return { pat: '' };
  return null;
}

function validation(formControl: FormControl): null | {} {
  const inputValue = formControl.value;
  if (typeof inputValue === 'string') {
    if (inputValue.length > 0 && inputValue.length < 4) {
      return { minlength: '' };
    }
    if (inputValue.length > 40) {
      return { maxlength: '' };
    }
  }
  return null;
}
