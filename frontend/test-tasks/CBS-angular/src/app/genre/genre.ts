let setOfGenre: Set<string>;

(function (): void {
  if (localStorage.getItem('setOfGenre')) {
    let tmp = JSON.parse(localStorage.getItem('setOfGenre'));
    setOfGenre = new Set<string>(tmp);
  } else {
    setOfGenre = new Set<string>([
      'Автобиография',
      'Проза',
      'Фантастика',
      'Философия',
      'Детективы',
      'Искусство и Дизайн',
      'Комедия',
    ]);
  }
})();

export { setOfGenre };
