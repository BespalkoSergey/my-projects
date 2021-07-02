import { Component, DoCheck } from '@angular/core';

import { output } from './../author';

@Component({
  selector: 'app-author-output',
  templateUrl: './author-output.component.html',
  styleUrls: ['./author-output.component.scss'],
})
export class AuthorOutputComponent implements DoCheck {
  show: string;

  constructor() {}

  ngDoCheck(): void {
    this.show = output.screen;
  }
}
