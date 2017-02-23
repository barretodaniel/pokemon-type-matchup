import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MoveType, Type } from './shared/type';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Change types to show effects against them instead effects against others
    const types: Type[] = [
      {
        id: MoveType.NORMAL,
        color: '#8a8a59',
        name: 'Normal',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.ROCK, MoveType.STEEL,
            MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG, MoveType.DRAGON, MoveType.DARK,
            MoveType.FAIRY
          ],
          resistant: [],
          immune: [MoveType.GHOST],
          weakness: [MoveType.FIGHTING]
        }
      },
      {
        id: MoveType.FIRE,
        color: '#f08030',
        name: 'Fire',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.ELECTRIC, MoveType.FIGHTING, MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC,
            MoveType.GHOST, MoveType.DARK, MoveType.DRAGON
          ],
          resistant: [MoveType.FIRE, MoveType.GRASS, MoveType.ICE, MoveType.BUG, MoveType.STEEL, MoveType.FAIRY],
          immune: [],
          weakness: [MoveType.GROUND, MoveType.WATER, MoveType.ROCK]
        }
      },
      {
        id: MoveType.WATER,
        color: '#6890f0',
        name: 'Water',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.ICE, MoveType.FIGHTING, MoveType.POISON, MoveType.FLYING, MoveType.PSYCHIC,
            MoveType.BUG, MoveType.GHOST, MoveType.DARK, MoveType.FAIRY, MoveType.GROUND, MoveType.ROCK, MoveType.DRAGON
          ],
          resistant: [MoveType.FIRE, MoveType.WATER, MoveType.ICE, MoveType.STEEL],
          immune: [],
          weakness: [MoveType.GRASS, MoveType.ELECTRIC]
        }
      },
      {
        id: MoveType.ELECTRIC,
        color: '#f8d030',
        name: 'Electric',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ICE, MoveType.FIGHTING, MoveType.POISON, MoveType.PSYCHIC,
            MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.DARK, MoveType.FAIRY, MoveType.GRASS, MoveType.DRAGON
          ],
          resistant: [MoveType.ELECTRIC, MoveType.STEEL, MoveType.FLYING],
          immune: [],
          weakness: [MoveType.GROUND]
        }
      },
      {
        id: MoveType.GRASS,
        color: '#78c850',
        name: 'Grass',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIGHTING, MoveType.PSYCHIC, MoveType.ROCK, MoveType.GHOST, MoveType.DARK,
            MoveType.FAIRY, MoveType.DRAGON, MoveType.STEEL
          ],
          resistant: [MoveType.WATER, MoveType.GRASS, MoveType.ELECTRIC, MoveType.GROUND],
          immune: [],
          weakness: [MoveType.FIRE, MoveType.ICE, MoveType.POISON, MoveType.FLYING, MoveType.BUG]
        }
      },
      {
        id: MoveType.ICE,
        color: '#98d8d8',
        name: 'Ice',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.WATER, MoveType.GRASS, MoveType.ELECTRIC, MoveType.FLYING, MoveType.POISON,
            MoveType.PSYCHIC, MoveType.GROUND, MoveType.BUG, MoveType.GHOST, MoveType.DRAGON, MoveType.DARK, MoveType.FAIRY
          ],
          resistant: [MoveType.ICE],
          immune: [],
          weakness: [MoveType.FIRE, MoveType.FIGHTING, MoveType.ROCK, MoveType.STEEL]
        }
      },
      {
        id: MoveType.FIGHTING,
        color: '#c03028',
        name: 'Fighting',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.FIGHTING,
            MoveType.POISON, MoveType.GROUND, MoveType.GHOST, MoveType.DRAGON, MoveType.STEEL
          ],
          resistant: [MoveType.BUG, MoveType.ROCK, MoveType.DARK],
          immune: [],
          weakness: [MoveType.FLYING, MoveType.PSYCHIC, MoveType.FAIRY]
        }
      },
      {
        id: MoveType.POISON,
        color: '#a040a0',
        name: 'Poison',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.ICE, MoveType.FLYING, MoveType.ROCK, MoveType.GHOST,
            MoveType.DRAGON, MoveType.DARK, MoveType.STEEL
          ],
          resistant: [MoveType.GRASS, MoveType.FIGHTING, MoveType.POISON, MoveType.BUG, MoveType.FAIRY,],
          immune: [],
          weakness: [MoveType.GROUND, MoveType.PSYCHIC]
        }
      },
      {
        id: MoveType.GROUND,
        color: '#e0c068',
        name: 'Ground',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.FIGHTING, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG,
            MoveType.GHOST, MoveType.DRAGON, MoveType.DARK, MoveType.STEEL, MoveType.FAIRY
          ],
          resistant: [MoveType.POISON, MoveType.ROCK],
          immune: [MoveType.ELECTRIC],
          weakness: [MoveType.WATER, MoveType.GRASS, MoveType.ICE]
        }
      },
      {
        id: MoveType.FLYING,
        color: '#a890f0',
        name: 'Flying',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.POISON, MoveType.FLYING, MoveType.PSYCHIC, MoveType.GHOST,
            MoveType.DRAGON, MoveType.DARK, MoveType.STEEL, MoveType.FAIRY
          ],
          resistant: [MoveType.GRASS, MoveType.FIGHTING, MoveType.BUG],
          immune: [MoveType.GROUND],
          weakness: [MoveType.ELECTRIC, MoveType.ICE, MoveType.ROCK]
        }
      },
      {
        id: MoveType.PSYCHIC,
        color: '#f85888',
        name: 'Psychic',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.POISON,
            MoveType.GROUND, MoveType.FLYING, MoveType.ROCK, MoveType.DRAGON, MoveType.STEEL, MoveType.FAIRY
          ],
          resistant: [MoveType.FIGHTING, MoveType.PSYCHIC],
          immune: [],
          weakness: [MoveType.BUG, MoveType.GHOST, MoveType.DARK]
        }
      },
      {
        id: MoveType.BUG,
        color: '#a8b820',
        name: 'Bug',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.WATER, MoveType.ELECTRIC, MoveType.ICE, MoveType.POISON, MoveType.PSYCHIC, MoveType.ROCK,
            MoveType.GHOST, MoveType.DRAGON, MoveType.DARK, MoveType.STEEL, MoveType.FAIRY
          ],
          resistant: [MoveType.GRASS, MoveType.FIGHTING, MoveType.GROUND],
          immune: [],
          weakness: [MoveType.FIRE, MoveType.FLYING, MoveType.BUG]
        }
      },
      {
        id: MoveType.ROCK,
        color: '#b8a038',
        name: 'Rock',
        active: false,
        effect: {
          normal: [
            MoveType.ELECTRIC, MoveType.ICE, MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.DRAGON,
            MoveType.DARK, MoveType.FAIRY
          ],
          resistant: [MoveType.NORMAL, MoveType.FIRE, MoveType.POISON, MoveType.FLYING],
          immune: [],
          weakness: [MoveType.WATER, MoveType.GRASS, MoveType.FIGHTING, MoveType.GROUND, MoveType.STEEL]
        }
      },
      {
        id: MoveType.GHOST,
        color: '#705898',
        name: 'Ghost',
        active: false,
        effect: {
          normal: [
            MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.GROUND, MoveType.FLYING,
            MoveType.PSYCHIC, MoveType.ROCK, MoveType.DRAGON, MoveType.STEEL, MoveType.FAIRY
          ],
          resistant: [MoveType.POISON, MoveType.BUG],
          immune: [MoveType.NORMAL, MoveType.FIGHTING],
          weakness: [MoveType.GHOST, MoveType.DARK]
        }
      },
      {
        id: MoveType.DRAGON,
        color: '#7038f8',
        name: 'Dragon',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIGHTING, MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC,
            MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.DARK, MoveType.STEEL
          ],
          resistant: [MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS],
          immune: [],
          weakness: [MoveType.ICE, MoveType.DRAGON, MoveType.FAIRY]
        }
      },
      {
        id: MoveType.DARK,
        color: '#705848',
        name: 'Dark',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.POISON,
            MoveType.GROUND, MoveType.FLYING, MoveType.ROCK, MoveType.DRAGON, MoveType.STEEL
          ],
          resistant: [MoveType.GHOST, MoveType.DARK],
          immune: [MoveType.PSYCHIC],
          weakness: [MoveType.FIGHTING, MoveType.BUG, MoveType.FAIRY]
        }
      },
      {
        id: MoveType.STEEL,
        color: '#b8b8d0',
        name: 'Steel',
        active: false,
        effect: {
          normal: [MoveType.WATER, MoveType.ELECTRIC, MoveType.GHOST, MoveType.DARK],
          resistant: [
            MoveType.NORMAL, MoveType.GRASS, MoveType.ICE, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK, MoveType.DRAGON,
            MoveType.STEEL, MoveType.FAIRY
          ],
          immune: [MoveType.POISON],
          weakness: [MoveType.FIRE, MoveType.FIGHTING, MoveType.GROUND]
        }
      },
      {
        id: MoveType.FAIRY,
        color: '#e898e8',
        name: 'Fairy',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.GROUND,
            MoveType.FLYING, MoveType.PSYCHIC, MoveType.ROCK, MoveType.GHOST, MoveType.FAIRY
          ],
          resistant: [MoveType.FIGHTING, MoveType.BUG, MoveType.DARK],
          immune: [MoveType.DRAGON],
          weakness: [MoveType.POISON, MoveType.STEEL]
        }
      }
    ];
    return { types };
  }

}
