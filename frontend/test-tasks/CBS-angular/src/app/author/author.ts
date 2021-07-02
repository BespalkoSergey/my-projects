class Book {
  constructor(
    public nameOfBook: string,
    public numberOfPages: number,
    public genre: string,
    public id: number
  ) {}
}

class Author {
  arrayOfBooks: Book[] = [];

  constructor(
    public surname: string,
    public name: string,
    public birthday: Date,
    public patronymic?: string
  ) {}

  setBook(name, number, genre) {
    this.arrayOfBooks.push(
      new Book(name, number, genre, this.arrayOfBooks.length)
    );
  }

  deleteBook(name) {
    this.arrayOfBooks = this.arrayOfBooks.filter((value) =>
      value.nameOfBook === name ? false : value
    );
  }
}

class Observe {
  author: undefined | Author = undefined;
  constructor() {}
  add(target?): void {
    if (target) {
      this.author = objOfAuthors[clearSurname(target)];
    } else {
      this.author = new Author('', '', new Date(Date.now()), '');
    }
  }
  clear(): void {
    this.author = undefined;
  }
}
const obs = new Observe();

class Outpt {
  screen: string = 'all';
  toDefault(): void {
    this.screen = 'all';
  }
  toEdit(): void {
    this.screen = 'edit';
  }
  toShow(): void {
    this.screen = 'show';
  }
}
const output = new Outpt();

const objOfAuthors: Object = {};
const authorsProcess = {
  rendering(): void {
    if (localStorage.getItem('objOfAuthors')) {
      let authors = JSON.parse(localStorage.getItem('objOfAuthors'));

      for (let key in authors) {
        objOfAuthors[authors[key].surname] = new Author(
          authors[key].surname,
          authors[key].name,
          authors[key].birthday,
          authors[key].patronymic ? authors[key].patronymic : null
        );
        for (let value of authors[key].arrayOfBooks) {
          objOfAuthors[authors[key].surname].setBook(
            value.nameOfBook,
            value.numberOfPages,
            value.genre
          );
        }
      }
    } else {
      objOfAuthors['Оруэлл'] = new Author(
        'Оруэлл',
        'Джордж',
        new Date('25 june 1903')
      );
      objOfAuthors['Оруэлл'].setBook('1984', 192, 'Фантастика');
      objOfAuthors['Оруэлл'].setBook('Скотный Двор', 256, 'Проза');
      objOfAuthors['Оруэлл'].setBook('Дочь священника', 352, 'Проза');
      objOfAuthors['Оруэлл'].setBook('Да здравствует фикус!', 317, 'Проза');

      objOfAuthors['Кристи'] = new Author(
        'Кристи',
        'Агата',
        new Date('15 september 1890'),
        'Петровна'
      );
      objOfAuthors['Кристи'].setBook(
        'Убийство в "Восточном экспрессе"',
        352,
        'Детективы'
      );
      objOfAuthors['Кристи'].setBook('Десять негритят', 320, 'Детективы');
      objOfAuthors['Кристи'].setBook('Автобиография', 880, 'Автобиография');

      objOfAuthors['Макиавелли'] = new Author(
        'Макиавелли',
        'Никколо',
        new Date('3 may 1469')
      );
      objOfAuthors['Макиавелли'].setBook('Государь', 320, 'Философия');
      objOfAuthors['Макиавелли'].setBook('Искусство войны', 416, 'Философия');
    }
  },
  setToLStorage(): void {
    localStorage.setItem('objOfAuthors', JSON.stringify(objOfAuthors));
  },
};

function clearSurname(trg): string {
  return trg.parentElement.children[0].children[0].textContent.match(
    /[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ']+/gmu
  )[0];
}


class SAS{
  result: {} = {}
}
const searchAndSelect: SAS = new SAS();

export {
  Author,
  Book,
  obs,
  output,
  objOfAuthors,
  authorsProcess,
  searchAndSelect,
  clearSurname,
};
