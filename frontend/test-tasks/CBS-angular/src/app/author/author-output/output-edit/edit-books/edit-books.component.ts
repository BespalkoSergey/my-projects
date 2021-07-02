import { Component, OnInit, DoCheck } from '@angular/core';

import { obs, Book, searchAndSelect } from './../../../author';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.scss'],
})
export class EditBooksComponent implements OnInit, DoCheck {
  arr: Book[];
  arrBooks: Book[];
  tmpObsAuthorArrBooks: Book[];
  constructor() {}

  ngDoCheck(): void {
    if (!compare(this.tmpObsAuthorArrBooks, obs.author.arrayOfBooks)) {
      this.arrBooks = [...obs.author.arrayOfBooks];
    }
    this.arr = sortBooks(searchAndSelect.result, this.arrBooks);
  }

  ngOnInit() {
    this.arrBooks = [...obs.author.arrayOfBooks];
    this.tmpObsAuthorArrBooks = obs.author.arrayOfBooks;
  }

  addBook() {
    this.arrBooks.push(new Book('', 0, '', obs.author.arrayOfBooks.length));
  }

  deleteBook(nameOfBook) {
    if(nameOfBook.length<1){
      this.arrBooks = [...obs.author.arrayOfBooks];
    }
    obs.author.deleteBook(nameOfBook);
  }
}

function sortBooks(objSearch, sortedArr: Book[]) {
  if (typeof objSearch.search === 'string' && objSearch.search.length > 1) {
    sortedArr = sortedArr.filter((v) => {
      return v.nameOfBook.toLowerCase().includes(objSearch.search.toLowerCase())
        ? v
        : false;
    });
  }
  switch (objSearch.select) {
    case 'Название':
      sortedArr.sort(function (a, b) {
        if (a.nameOfBook > b.nameOfBook) {
          return 1;
        }
        if (a.nameOfBook < b.nameOfBook) {
          return -1;
        }
        return 0;
      });
      break;
    case 'Кол-во страниц':
      sortedArr.sort(function (a, b) {
        if (a.numberOfPages > b.numberOfPages) {
          return -1;
        }
        if (a.numberOfPages < b.numberOfPages) {
          return 1;
        }
        return 0;
      });
      break;
    case 'Жанр':
      sortedArr.sort(function (a, b) {
        if (a.genre > b.genre) {
          return 1;
        }
        if (a.genre < b.genre) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      break;
  }
  return sortedArr;
}

function compare(a1, a2) {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}
