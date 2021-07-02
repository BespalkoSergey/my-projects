export interface IAnimal {
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
