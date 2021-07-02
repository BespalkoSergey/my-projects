class MyCollection {
    constructor(arr = []) {
        this.arr = arr;
        this.result = "";
        this.tmpArray = this.getValues();
        arr.forEach((e, i) => {
            if (/^\d+$/.test(e)) {
                throw new Error(`Numbers not accepted, you have at position ${i} = ${e}`);
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
const ask = () => {
    let strArray = [];
    let flag = true;
    let tmp;
    while (flag) {
        tmp = prompt("Enter Words,if you want to stop just press enter");
        tmp ? strArray.push(tmp) : (flag = false);
    }
    return strArray;
};
let stringCollection = new MyCollection(ask()).concatenation();
//# sourceMappingURL=addTsk.js.map