import { Component, DoCheck } from '@angular/core';
import { objOfAuthors, clearSurname, obs, output } from './../../author';

@Component({
  selector: 'app-output-all-authors',
  templateUrl: './output-all-authors.component.html',
  styleUrls: ['./output-all-authors.component.scss'],
})
export class OutputAllAuthorsComponent implements DoCheck {
  arr: String[];
  constructor() {}

  ngDoCheck(): void {
    this.arr = Object.values(objOfAuthors);
  }

  deleteAuthor(target) {
    delete objOfAuthors[clearSurname(target)];
  }
  editAuthor(target) {
    output.toEdit();
    obs.add(target);
  }
  showAuthor(target) {
    output.toShow();
    obs.add(target);
  }
  addAuthor() {
    output.toEdit();
    obs.add();
  }
}
