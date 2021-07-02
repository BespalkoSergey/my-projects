/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/classes.ts":
/*!*************************!*\
  !*** ./_src/classes.ts ***!
  \*************************/
/*! exports provided: Animal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animal\", function() { return Animal; });\nvar Animal = /** @class */ (function () {\r\n    function Animal(habitat, cellStructure, structure, movement, nutrition, breath, breeds, circulatorySystem, secretion, nervousSystem, irritability) {\r\n        this.habitat = habitat;\r\n        this.cellStructure = cellStructure;\r\n        this.structure = structure;\r\n        this.movement = movement;\r\n        this.nutrition = nutrition;\r\n        this.breath = breath;\r\n        this.breeds = breeds;\r\n        this.circulatorySystem = circulatorySystem;\r\n        this.secretion = secretion;\r\n        this.nervousSystem = nervousSystem;\r\n        this.irritability = irritability;\r\n    }\r\n    Animal.prototype.introducing = function () {\r\n        console.log(\"\\n\" + this.habitat, \"\\n\" + this.cellStructure, \"\\n\" + this.structure, \"\\n\" + this.movement, \"\\n\" + this.nutrition, \"\\n\" + this.breath, \"\\n\" + this.breeds, \"\\n\" + this.circulatorySystem, \"\\n\" + this.secretion, \"\\n\" + this.nervousSystem);\r\n    };\r\n    Animal.prototype.moving = function (direction) {\r\n        switch (direction) {\r\n            case \"forward\":\r\n                console.log(\"i`m moving forward\");\r\n                break;\r\n            case \"back\":\r\n                console.log(\"i`m moving back\");\r\n                break;\r\n            case \"left\":\r\n                console.log(\"i`m moving left\");\r\n                break;\r\n            case \"right\":\r\n                console.log(\"i`m moving right\");\r\n                break;\r\n            default:\r\n                console.log(\"I dont know \" + direction + \"!\");\r\n                break;\r\n        }\r\n    };\r\n    Animal.prototype.eating = function () {\r\n        console.log(\"\\n\" + \" Я люблю кушать ММммм ...Ням ням\", \"\\n\" + this.nutrition);\r\n    };\r\n    Animal.prototype.breathing = function () {\r\n        console.log(\"I\\`m breathing\");\r\n    };\r\n    Animal.prototype.breeding = function () {\r\n        console.log(\"I like to do babbys\");\r\n    };\r\n    Animal.prototype.irritabiliting = function () {\r\n        console.log(\"All my fantasy is gone\");\r\n    };\r\n    return Animal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./_src/classes.ts?");

/***/ }),

/***/ "./_src/main.ts":
/*!**********************!*\
  !*** ./_src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./_src/classes.ts\");\n\r\nvar cat = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Animal\"](\"Среда обитания: Просто Дома\", \"Клеточное строение: многоклеточные\", \"Покровы тела – Тело покрыто шерстью – волосами, среди которых имеются осязательные волоски – вибриссы; два типа кожных желез: сальные и потовые.\\nБоковая линия – нет.\\n Орган зрения – Глаза снабжены веками, но третье веко рудиментарное, острота зрения зависит от условий жизни. Цветовое зрение слабее, чем у птиц, либо отсутствует.\\nОрган слуха – Имеют внутреннее, среднее и наружное ухо, слух обычно хорошо развит, у некоторых есть звуковая локация.\\nОбоняние – Носовая полость с носовыми раковинами, покрыты эпителием, обоняние тонкое.\\nВкус – Вкусовые почки, чувствительные клетки, которые в виде сосочков погружены в поверхность языка.\\nРазмножение – Раздельнополые. Оплодотворение внутреннее. \\nЗародыш, как правило, развивается в организме самки, живородящие.\", \"Мышцы – Дифференцирована и представлена множеством разнообразно расположенных мускулов, характерно наличие диафрагмы, развита подкожная мускулатура, мимическая на лице.\\nНервная система – Головной мозг характеризуется крупными размерами. Разрастается кора головного мозга. У большинства видов она не гладкая, а образует борозды, увеличивающие ее площадь. Крупный мозжечок дифференцирован на отделы.\", \"В рацион питания домашних кошек должны входить: мясо курицы, индейки, куриные потроха (сердце, желудки, говяжий фарш); телятина, говядина, баранина, крольчатина, мясные субпродукты (печень, язык, сердце, легкие);\", \"Воздух, который вдыхает кошка, проходит через обонятельный аппарат носа, окруженный фронтальными пазухами, где он согревается, увлажняется и фильтруется. Через глотку, которая относится как к дыхательному, так и к пищеварительному тракту, воздух проходит в гортань и достигает легких через трахею\", \"Размножение – Раздельнополые. Оплодотворение внутреннее. Зародыш, как правило, развивается в организме самки, живородящие.\", \"Кровеносная система – Сложно устроена. Два круга кровообращения, совершенные сосуды, аорта, артерии, капилляры.\", \"Выделительная система – Почки, состоящие из наружного (коркового) и внутреннего (мозгового) слоев мочеточники мочевой пузырь мочеиспускательный канал. Частично выделительную функцию выполняют потовые железы.\", \"Нервная система – Головной мозг характеризуется крупными размерами. Разрастается кора головного мозга. У большинства видов она не гладкая, а образует борозды, увеличивающие ее площадь. Крупный мозжечок дифференцирован на отделы.\");\r\nvar bird = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Animal\"](\"Птицы обитают в разных местах: кто-то выбирает себе леса, другие равнины или горы, а кто-то любит воду. Птицы встречаются везде, хотя большинство их видов обитает в тропиках.\", \"Клеточное строение: многоклеточные\", \"Покровы тела – Тело покрыто перьями, на ногах роговые щитки.\\nБоковая линия – нет.\\nОрган зрения – Глаза снабжены веками, в т.ч. и третьим веком – мигательная перепонка, обладают исключительной зоркостью, хорошо различают цвета.\\nОрган слуха – Внутреннее, среднее и наружное ухо, хорошо слышат.\\nОбоняние – Носовая полость, обоняние развито слабо.\\nВкус – Развиты слабо (чувствительные клетки во рту).\", \"Мышцы – Грудные мышцы мощные, поднимают и опускают крылья, сложная мускулатура задних конечностей.\", \"Рацион птиц обычно сильно варьируется, и включает семена, орехи, фрукты, овощи, насекомых, мелких животных, рыбу и даже других птиц\", \"Дыхательная система – Легочное дыхание, трахея разделяется на два бронха, нижняя гортань с голосовыми связками.\", \"Размножение – Раздельнополые. Оплодотворение внутреннее. Яйцекладущие. Яйца содержат желток и покрыты известковой скорлупой. Личиночных стадий нет.\", \"Кровеносная система – Полное разделение большого и малого кругов кровообращения. Артериальная и венозная кровь не смешиваются, сердце четырехкамерное, большое по объему, состоит из двух предсердий и двух желудочков, сердце работает интенсивно.\", \"Выделительная система – Почки мочеточники клоака. Мочевого пузыря нет.\", \"Нервная система – Сложнее, чем у земноводных и пресмыкающихся. Масса головного мозга равна массе спинного, полушария переднего мозга, связано с расширением двигательной активности и усложнением поведения. Мозжечок очень большой, это объясняется сложным движением птиц.\");\r\nvar fish = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Animal\"](\"Средой обитание рыб является вода\", \"Клеточное строение: многоклеточные\", \"Покровы тела – ктеноидная или циклоидная чешуя.\\nБоковая линия – Воспринимает направление и силу тока воды.\\nОрган зрения – Глаза имеют шаровидный хрусталик и плоскую роговицу, различают форму и цвет, веки отсутствуют.\\nОрган слуха – Имеется только внутреннее ухо, среднее и наружное отсутствуют.\\nОбоняние – Слепые мешки отходят от ноздрей, обоняние очень тонкое.\\nВкус – Чувствительные клетки (во рту и по всему телу).\", \"Мышцы – Сегментированы и представлены Z-образными туловищными мышцами, разделенными соединительно-тканными перегородками.\", \"Хищными называют тех, которые поедают других рыб, а также некоторых животных и птиц.  К хищным рыбам относятся щука, окунь, судак, сом, налим, белуга, голавль и др.\\n  Мирные рыбы поедают червей, ракообразных, моллюсков, насекомых и их личинок и, кроме того, частично питаются растениями. Однако чистых растительноядных среди рыб немного. Наиболее типичные их представители - белый амур и толстолобик.\", \"Дыхательная система – Четыре полные жабры и один ряд жаберных лепестков на внутренней стороне жаберной крышки.\", \"Размножение – Раздельнополы, самка выметывает икру в воду, а самец покрывает ее семенем (молоками), т.е. оплодотворение наружное, имеются личиночные стадии.\", \"Кровеносная система – Замкнутая и состоит из двухкамерного сердца и сосудов. Один круг кровообращения. Пищеварительная система – Ротовая полость глотка пищевод желудок кишечник со слепыми отростками печень, желчный пузырь, поджелудочная железа, плавательный пузырь анальное отверстие.\", \"Выделительная система – Длинные лентовидные почки, по ним тянутся мочеточники, которые объединяются в непарный канал мочеполовой сосочек.\", \"Нервная система – Состоит из головного и спинного мозга и отходящих от них нервов. Головной мозг из пяти отделов. В поведении рыб проявляются безусловные и условные рефлексы.\");\r\n// cat.introducing();\r\n// bird.introducing();\r\n// fish.introducing();\r\ncat.eating();\r\nbird.eating();\r\nfish.eating();\r\n// cat.breathing();\r\n// bird.breathing();\r\n// fish.breathing();\r\n// cat.moving(\"forward\");\r\n// bird.moving(\"forwird\");\r\n// fish.moving(\"back\");\r\n// cat.breeding();\r\n// bird.breeding();\r\n// fish.breeding();\r\n\n\n//# sourceURL=webpack:///./_src/main.ts?");

/***/ })

/******/ });