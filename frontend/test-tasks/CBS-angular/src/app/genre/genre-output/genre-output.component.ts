import { Component, DoCheck } from '@angular/core';
import { setOfGenre } from './../genre';

@Component({
  selector: 'app-genre-output',
  templateUrl: './genre-output.component.html',
  styleUrls: ['./genre-output.component.scss'],
})
export class GenreOutputComponent implements DoCheck {
  arr: string[];
  ngDoCheck(): void {
    this.arr = [...setOfGenre];
  }
  deleteGenre(target): void {
    setOfGenre.delete(target.parentElement.children[0].textContent);
    localStorage.setItem('setOfGenre', JSON.stringify(Array.from(setOfGenre)));
  }
}
