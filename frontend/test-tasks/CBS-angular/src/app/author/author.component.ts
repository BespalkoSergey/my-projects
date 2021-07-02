import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

import { authorsProcess } from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit,OnDestroy {
  constructor() {}

  @HostListener('window:beforeunload', ['$event']) onBeforeUnload(event) {
    authorsProcess.setToLStorage();
  }

  ngOnInit(): void {
    authorsProcess.rendering();
  }

  ngOnDestroy(): void {
    authorsProcess.setToLStorage();
  }
}
