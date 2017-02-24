interface Effect {
  normal: number[];
  resistant: number[];
  immune: number[];
  weakness: number[];
}

export class Type {
  constructor(public id: MoveType, public color: string, public name: string, public active: boolean, public effect: Effect) { }
}

export enum MoveType {
  NORMAL = 1,
  FIRE,
  WATER,
  ELECTRIC,
  GRASS,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
  FAIRY
}
