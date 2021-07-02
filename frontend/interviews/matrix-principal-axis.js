// Отделно вывести переменные под, над, и саму главную ось матрицы

const arrMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const showValuesOfMainRow = (symbl) => {
  return arrMatrix.map((arr, indexParent) => {
    return arr.map((v, indexChildren) => {
      if (symbl === '<') return indexChildren < indexParent ? v : ' ';
      if (symbl === '>') return indexChildren > indexParent ? v : ' ';
      if (symbl === '=') return indexChildren === indexParent ? v : ' ';
    }).join(' ');
  }).join('\n');
};

console.log(showValuesOfMainRow('>'));