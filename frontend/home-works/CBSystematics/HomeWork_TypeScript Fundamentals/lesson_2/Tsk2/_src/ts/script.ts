abstract class Car {
  constructor(
    public modelClass: string,
    public modelAuto: string,
    public year: number,
    protected participationAccident: boolean
  ) {}
  private isStarted: boolean = false;
  abstract listenMusic(radio: string): void;
  private sayStart(): void {
    console.log("Нажми на кнопку старт что бы завести меня.");
  }
  public saySelfy(): void {
    console.log(
      `Привет я ${this.modelClass} ${this.modelAuto}, я ${this.year} года.`
    );
  }
  public getStart(button: boolean): void {
    if (button) {
      this.isStarted = true;
      console.log("Врум.. Врум.. Я завёлся.");
    } else {
      this.sayStart();
    }
  }
  public move(): void {
    if (this.isStarted) {
      console.log(this.modelClass + " передвигается");
    } else {
      this.sayStart();
    }
  }
}

class Mercedes extends Car {
  constructor(
    public model: string,
    public year: number,
    protected partAccident: boolean
  ) {
    super("Mercedes", model, year, partAccident);
  }
  listenMusic(radio: string): void {
    console.log(`Ля Ля Ту ту Туц, Вы слушаете ${radio}`);
  }
}
class Audi extends Car {
  constructor(
    public model: string,
    public year: number,
    protected partAccident: boolean
  ) {
    super("Audi", model, year, partAccident);
  }
  listenMusic(radio: string): void {
    console.log(`Ля Ля Ту ту Туц, Вы слушаете ${radio}`);
  }
}
class Bmw extends Car {
  constructor(
    public model: string,
    public year: number,
    protected partAccident: boolean
  ) {
    super("Bmw", model, year, partAccident);
  }
  listenMusic(radio: string): void {
    console.log(`Ля Ля Ту ту Туц, Вы слушаете ${radio}`);
  }
}

let car1: Mercedes = new Mercedes("S600(Kaban)", 1999, false);
let car2: Audi = new Audi("A8L(Transporter 2)", 2005, true);
let car3: Bmw = new Bmw("750iL(Бумер)", 1995, true);

car1.getStart(true);
car1.move();
car1.listenMusic("Шансон");
car1.saySelfy();
console.log("==========================");
car2.getStart(true);
car2.move();
car2.listenMusic("Radio Chill");
car2.saySelfy();
console.log("==========================");
car3.getStart(true);
car3.move();
car3.listenMusic("HIT FM");
car3.saySelfy();
