interface IAnimal {
  habitat: string;
  cellStructure: string;
  structure: string;
  movement: string;
  nutrition: string;
  breath: string;
  breeds: string;
  circulatorySystem: string;
  secretion: string;
  nervousSystem: string;
  irritability?: string;
  moving(direction: string): void;
  eating(): void;
  breathing(breathingAgent: string): void;
  breeding(conditions: string): void;
  irritabiliting?(condition: string): void;
  introducing(): void;
}

class Animal implements IAnimal {
  constructor(
    public habitat: string,
    public cellStructure: string,
    public structure: string,
    public movement: string,
    public nutrition: string,
    public breath: string,
    public breeds: string,
    public circulatorySystem: string,
    public secretion: string,
    public nervousSystem: string,
    public irritability?: string
  ) {}
  public introducing() {
    console.log(
      "\n" + this.habitat,
      "\n" + this.cellStructure,
      "\n" + this.structure,
      "\n" + this.movement,
      "\n" + this.nutrition,
      "\n" + this.breath,
      "\n" + this.breeds,
      "\n" + this.circulatorySystem,
      "\n" + this.secretion,
      "\n" + this.nervousSystem
    );
  }
  public moving(direction: string): void {
    switch (direction) {
      case "forward":
        console.log("i`m moving forward");
        break;
      case "back":
        console.log("i`m moving back");

        break;
      case "left":
        console.log("i`m moving left");

        break;
      case "right":
        console.log("i`m moving right");

        break;

      default:
        console.log(`I dont know ${direction}!`);
        break;
    }
  }
  public eating(): void {
    console.log(
      "\n" + " Я люблю кушать ММммм ...Ням ням",
      "\n" + this.nutrition
    );
  }
  public breathing(): void {
    console.log("I\`m breathing");
  }
  public breeding(): void {
    console.log("I like to do babbys");
  }
  public irritabiliting?(): void {
    console.log("All my fantasy is gone");
  }
}

let cat = new Animal(
  "Среда обитания: Дома одиноких и никому ненужных женщин.",
  "Клеточное строение: многоклеточные",
  "Покровы тела – Тело покрыто шерстью – волосами, среди которых имеются осязательные волоски – вибриссы; два типа кожных желез: сальные и потовые.\nБоковая линия – нет.\n Орган зрения – Глаза снабжены веками, но третье веко рудиментарное, острота зрения зависит от условий жизни. Цветовое зрение слабее, чем у птиц, либо отсутствует.\nОрган слуха – Имеют внутреннее, среднее и наружное ухо, слух обычно хорошо развит, у некоторых есть звуковая локация.\nОбоняние – Носовая полость с носовыми раковинами, покрыты эпителием, обоняние тонкое.\nВкус – Вкусовые почки, чувствительные клетки, которые в виде сосочков погружены в поверхность языка.\nРазмножение – Раздельнополые. Оплодотворение внутреннее. \nЗародыш, как правило, развивается в организме самки, живородящие.",
  "Мышцы – Дифференцирована и представлена множеством разнообразно расположенных мускулов, характерно наличие диафрагмы, развита подкожная мускулатура, мимическая на лице.\nНервная система – Головной мозг характеризуется крупными размерами. Разрастается кора головного мозга. У большинства видов она не гладкая, а образует борозды, увеличивающие ее площадь. Крупный мозжечок дифференцирован на отделы.",
  "В рацион питания домашних кошек должны входить: мясо курицы, индейки, куриные потроха (сердце, желудки, говяжий фарш); телятина, говядина, баранина, крольчатина, мясные субпродукты (печень, язык, сердце, легкие);",
  "В рацион питания домашних кошек должны входить: мясо курицы, индейки, куриные потроха (сердце, желудки, говяжий фарш); телятина, говядина, баранина, крольчатина, мясные субпродукты (печень, язык, сердце, легкие);",
  "Размножение – Раздельнополые. Оплодотворение внутреннее. Зародыш, как правило, развивается в организме самки, живородящие.",
  "Кровеносная система – Сложно устроена. Два круга кровообращения, совершенные сосуды, аорта, артерии, капилляры.",
  "Выделительная система – Почки, состоящие из наружного (коркового) и внутреннего (мозгового) слоев мочеточники мочевой пузырь мочеиспускательный канал. Частично выделительную функцию выполняют потовые железы.",
  "Нервная система – Головной мозг характеризуется крупными размерами. Разрастается кора головного мозга. У большинства видов она не гладкая, а образует борозды, увеличивающие ее площадь. Крупный мозжечок дифференцирован на отделы."
);

let bird = new Animal(
  "Птицы обитают в разных местах: кто-то выбирает себе леса, другие равнины или горы, а кто-то любит воду. Птицы встречаются везде, хотя большинство их видов обитает в тропиках.",
  "Клеточное строение: многоклеточные",
  "Покровы тела – Тело покрыто перьями, на ногах роговые щитки.\nБоковая линия – нет.\nОрган зрения – Глаза снабжены веками, в т.ч. и третьим веком – мигательная перепонка, обладают исключительной зоркостью, хорошо различают цвета.\nОрган слуха – Внутреннее, среднее и наружное ухо, хорошо слышат.\nОбоняние – Носовая полость, обоняние развито слабо.\nВкус – Развиты слабо (чувствительные клетки во рту).",
  "Мышцы – Грудные мышцы мощные, поднимают и опускают крылья, сложная мускулатура задних конечностей.",
  "Рацион птиц обычно сильно варьируется, и включает семена, орехи, фрукты, овощи, насекомых, мелких животных, рыбу и даже других птиц",
  "Дыхательная система – Легочное дыхание, трахея разделяется на два бронха, нижняя гортань с голосовыми связками.",
  "Размножение – Раздельнополые. Оплодотворение внутреннее. Яйцекладущие. Яйца содержат желток и покрыты известковой скорлупой. Личиночных стадий нет.",
  "Кровеносная система – Полное разделение большого и малого кругов кровообращения. Артериальная и венозная кровь не смешиваются, сердце четырехкамерное, большое по объему, состоит из двух предсердий и двух желудочков, сердце работает интенсивно.",
  "Выделительная система – Почки мочеточники клоака. Мочевого пузыря нет.",
  "Нервная система – Сложнее, чем у земноводных и пресмыкающихся. Масса головного мозга равна массе спинного, полушария переднего мозга, связано с расширением двигательной активности и усложнением поведения. Мозжечок очень большой, это объясняется сложным движением птиц."
);

let fish = new Animal(
  "Средой обитание рыб является вода",
  "Клеточное строение: многоклеточные",
  "Покровы тела – ктеноидная или циклоидная чешуя.\nБоковая линия – Воспринимает направление и силу тока воды.\nОрган зрения – Глаза имеют шаровидный хрусталик и плоскую роговицу, различают форму и цвет, веки отсутствуют.\nОрган слуха – Имеется только внутреннее ухо, среднее и наружное отсутствуют.\nОбоняние – Слепые мешки отходят от ноздрей, обоняние очень тонкое.\nВкус – Чувствительные клетки (во рту и по всему телу).",
  "Мышцы – Сегментированы и представлены Z-образными туловищными мышцами, разделенными соединительно-тканными перегородками.",
  "  Хищными называют тех, которые поедают других рыб, а также некоторых животных и птиц.  К хищным рыбам относятся щука, окунь, судак, сом, налим, белуга, голавль и др.\n  Мирные рыбы поедают червей, ракообразных, моллюсков, насекомых и их личинок и, кроме того, частично питаются растениями. Однако чистых растительноядных среди рыб немного. Наиболее типичные их представители - белый амур и толстолобик.",
  "Дыхательная система – Четыре полные жабры и один ряд жаберных лепестков на внутренней стороне жаберной крышки.",
  "Размножение – Раздельнополы, самка выметывает икру в воду, а самец покрывает ее семенем (молоками), т.е. оплодотворение наружное, имеются личиночные стадии.",
  "Кровеносная система – Замкнутая и состоит из двухкамерного сердца и сосудов. Один круг кровообращения. Пищеварительная система – Ротовая полость глотка пищевод желудок кишечник со слепыми отростками печень, желчный пузырь, поджелудочная железа, плавательный пузырь анальное отверстие.",
  "Выделительная система – Длинные лентовидные почки, по ним тянутся мочеточники, которые объединяются в непарный канал мочеполовой сосочек.",
  "Нервная система – Состоит из головного и спинного мозга и отходящих от них нервов. Головной мозг из пяти отделов. В поведении рыб проявляются безусловные и условные рефлексы."
);

// cat.introducing();
// bird.introducing();
// fish.introducing();

// cat.eating();
// bird.eating();
// fish.eating();

// cat.breathing();
// bird.breathing();
// fish.breathing();

// cat.moving("forward");
// bird.moving("forwird");
// fish.moving("back");

// cat.breeding();
// bird.breeding();
// fish.breeding();