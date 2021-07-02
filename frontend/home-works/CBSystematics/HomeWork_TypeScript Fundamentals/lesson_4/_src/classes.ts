import { IAnimal } from "./interfaces";

export class Animal implements IAnimal {
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