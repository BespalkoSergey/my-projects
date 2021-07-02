import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { output, searchAndSelect } from './../author';

@Component({
  selector: 'app-author-search-and-select',
  templateUrl: './author-search-and-select.component.html',
  styleUrls: ['./author-search-and-select.component.scss'],
})
export class AuthorSearchAndSelectComponent implements DoCheck, OnInit {
  authorForm__input: FormGroup;
  arr: String[];

  constructor(private fb: FormBuilder) {}

  ngDoCheck(): void {
    this.arr = rewriteArr();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.authorForm__input = this.fb.group({
      search: ['', []],
      select: [],
    });

    this.authorForm__input.valueChanges.subscribe((data) =>
      this.onValueChange(data)
    );

    this.onValueChange();
  }
  onValueChange(data?: any) {
    if (!data) return;
    searchAndSelect.result = data;
  }
}

function rewriteArr() {
  return output.screen === 'all'
    ? ['За Автором', 'Кол-во книг']
    : ['Название', 'Кол-во страниц', 'Жанр'];
}
