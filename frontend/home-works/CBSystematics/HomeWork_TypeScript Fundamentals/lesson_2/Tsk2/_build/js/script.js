var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(modelClass, modelAuto, year, participationAccident) {
        this.modelClass = modelClass;
        this.modelAuto = modelAuto;
        this.year = year;
        this.participationAccident = participationAccident;
        this.isStarted = false;
    }
    Car.prototype.sayStart = function () {
        console.log("Нажми на кнопку старт что бы завести меня.");
    };
    Car.prototype.saySelfy = function () {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442 \u044F " + this.modelClass + " " + this.modelAuto + ", \u044F " + this.year + " \u0433\u043E\u0434\u0430.");
    };
    Car.prototype.getStart = function (button) {
        if (button) {
            this.isStarted = true;
            console.log("Врум.. Врум.. Я завёлся.");
        }
        else {
            this.sayStart();
        }
    };
    Car.prototype.move = function () {
        if (this.isStarted) {
            console.log(this.modelClass + " передвигается");
        }
        else {
            this.sayStart();
        }
    };
    return Car;
}());
var Mercedes = (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(model, year, partAccident) {
        var _this = _super.call(this, "Mercedes", model, year, partAccident) || this;
        _this.model = model;
        _this.year = year;
        _this.partAccident = partAccident;
        return _this;
    }
    Mercedes.prototype.listenMusic = function (radio) {
        console.log("\u041B\u044F \u041B\u044F \u0422\u0443 \u0442\u0443 \u0422\u0443\u0446, \u0412\u044B \u0441\u043B\u0443\u0448\u0430\u0435\u0442\u0435 " + radio);
    };
    return Mercedes;
}(Car));
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, partAccident) {
        var _this = _super.call(this, "Audi", model, year, partAccident) || this;
        _this.model = model;
        _this.year = year;
        _this.partAccident = partAccident;
        return _this;
    }
    Audi.prototype.listenMusic = function (radio) {
        console.log("\u041B\u044F \u041B\u044F \u0422\u0443 \u0442\u0443 \u0422\u0443\u0446, \u0412\u044B \u0441\u043B\u0443\u0448\u0430\u0435\u0442\u0435 " + radio);
    };
    return Audi;
}(Car));
var Bmw = (function (_super) {
    __extends(Bmw, _super);
    function Bmw(model, year, partAccident) {
        var _this = _super.call(this, "Bmw", model, year, partAccident) || this;
        _this.model = model;
        _this.year = year;
        _this.partAccident = partAccident;
        return _this;
    }
    Bmw.prototype.listenMusic = function (radio) {
        console.log("\u041B\u044F \u041B\u044F \u0422\u0443 \u0442\u0443 \u0422\u0443\u0446, \u0412\u044B \u0441\u043B\u0443\u0448\u0430\u0435\u0442\u0435 " + radio);
    };
    return Bmw;
}(Car));
var car1 = new Mercedes("S600(Kaban)", 1999, false);
var car2 = new Audi("A8L(Transporter 2)", 2005, true);
var car3 = new Bmw("750iL(Бумер)", 1995, true);
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
