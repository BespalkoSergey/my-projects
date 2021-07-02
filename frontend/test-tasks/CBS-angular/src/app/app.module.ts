import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { GenreComponent } from './genre/genre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenreInputComponent } from './genre/genre-input/genre-input.component';
import { GenreOutputComponent } from './genre/genre-output/genre-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorOutputComponent } from './author/author-output/author-output.component';
import { AuthorSearchAndSelectComponent } from './author/author-search-and-select/author-search-and-select.component';
import { OutputShowComponent } from './author/author-output/output-show/output-show.component';
import { OutputEditComponent } from './author/author-output/output-edit/output-edit.component';
import { OutputAllAuthorsComponent } from './author/author-output/output-all-authors/output-all-authors.component';
import { EditBooksComponent } from './author/author-output/output-edit/edit-books/edit-books.component';
import { BookFormComponent } from './author/author-output/output-edit/edit-books/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    GenreComponent,
    GenreInputComponent,
    GenreOutputComponent,
    AuthorOutputComponent,
    AuthorSearchAndSelectComponent,
    OutputShowComponent,
    OutputEditComponent,
    OutputAllAuthorsComponent,
    EditBooksComponent,
    BookFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
