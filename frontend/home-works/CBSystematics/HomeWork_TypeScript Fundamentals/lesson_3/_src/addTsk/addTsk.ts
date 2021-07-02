class MyCollection {
  private result: string = "";
  private tmpArray = this.getValues();
  constructor(public arr: string[] = []) {
    arr.forEach((e, i) => {
      if (/^\d+$/.test(e)) {
        throw new Error(
          `Numbers not accepted, you have at position ${i} = ${e}`
        );
      }
    });
  }

  *getValues() {
    for (let i = 0; i < this.arr.length; i++) {
      yield this.arr[i];
    }
  }

  concatenation() {
    for (const item of this.tmpArray) {
      this.result += item;
    }
    console.log(this.result);
  }
}

const ask = (): string[] => {
  let strArray: string[] = [];
  let flag: boolean = true;
  let tmp: string;
  while (flag) {
    tmp = prompt("Enter Words,if you want to stop just press enter");
    tmp ? strArray.push(tmp) : (flag = false);
  }
  return strArray;
};

let stringCollection = new MyCollection(ask()).concatenation();
