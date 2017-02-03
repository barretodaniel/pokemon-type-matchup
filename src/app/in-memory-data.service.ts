import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MoveType } from './shared/type';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const types = [
      {
        id: MoveType.NORMAL,
        color: '#8a8a59',
        name: 'Normal',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.FIGHTING,
            MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG, MoveType.DRAGON, MoveType.DARK,
            MoveType.FAIRY
          ],
          half: [MoveType.ROCK, MoveType.STEEL],
          none: [MoveType.GHOST],
          super: []
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
            MoveType.GHOST, MoveType.DARK, MoveType.FAIRY
          ],
          half: [MoveType.FIRE, MoveType.WATER, MoveType.ROCK, MoveType.DRAGON],
          none: [],
          super: [MoveType.GRASS, MoveType.ICE, MoveType.BUG, MoveType.STEEL]
        }
      },
      {
        id: MoveType.WATER,
        color: '#6890f0',
        name: 'Water',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.ELECTRIC, MoveType.ICE, MoveType.FIGHTING, MoveType.POISON, MoveType.FLYING, MoveType.PSYCHIC,
            MoveType.BUG, MoveType.GHOST, MoveType.DARK, MoveType.STEEL, MoveType.FAIRY
          ],
          half: [MoveType.WATER, MoveType.GRASS, MoveType.DRAGON],
          none: [],
          super: [MoveType.FIRE, MoveType.GROUND, MoveType.ROCK]
        }
      },
      {
        id: MoveType.ELECTRIC,
        color: '#f8d030',
        name: 'Electric',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.ICE, MoveType.FIGHTING, MoveType.POISON, MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK,
            MoveType.GHOST, MoveType.DARK, MoveType.STEEL, MoveType.FAIRY
          ],
          half: [MoveType.ELECTRIC, MoveType.GRASS, MoveType.DRAGON],
          none: [MoveType.GROUND],
          super: [MoveType.WATER, MoveType.FLYING]
        }
      },
      {
        id: MoveType.GRASS,
        color: '#78c850',
        name: 'Grass',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.ELECTRIC, MoveType.ICE, MoveType.FIGHTING, MoveType.PSYCHIC, MoveType.GHOST, MoveType.DARK,
            MoveType.FAIRY
          ],
          half: [MoveType.FIRE, MoveType.GRASS, MoveType.POISON, MoveType.FLYING, MoveType.BUG, MoveType.DRAGON, MoveType.STEEL],
          none: [],
          super: [MoveType.WATER, MoveType.GROUND, MoveType.ROCK]
        }
      },
      {
        id: MoveType.ICE,
        color: '#98d8d8',
        name: 'Ice',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.ELECTRIC, MoveType.FIGHTING, MoveType.POISON, MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK,
            MoveType.GHOST, MoveType.DARK, MoveType.FAIRY
          ],
          half: [MoveType.FIRE, MoveType.WATER, MoveType.ICE, MoveType.STEEL],
          none: [],
          super: [MoveType.GRASS, MoveType.GROUND, MoveType.FLYING, MoveType.DRAGON]
        }
      },
      {
        id: MoveType.FIGHTING,
        color: '#c03028',
        name: 'Fighting',
        active: false,
        effect: {
          normal: [MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.FIGHTING, MoveType.GROUND, MoveType.DRAGON],
          half: [MoveType.POISON, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG, MoveType.FAIRY],
          none: [MoveType.GHOST],
          super: [MoveType.NORMAL, MoveType.ICE, MoveType.ROCK, MoveType.DARK, MoveType.STEEL]
        }
      },
      {
        id: MoveType.POISON,
        color: '#a040a0',
        name: 'Poison',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.ICE, MoveType.FIGHTING, MoveType.FLYING,
            MoveType.PSYCHIC, MoveType.BUG, MoveType.DRAGON, MoveType.DARK
          ],
          half: [MoveType.POISON, MoveType.GROUND, MoveType.ROCK, MoveType.GHOST],
          none: [MoveType.STEEL],
          super: [MoveType.GRASS, MoveType.FAIRY]
        }
      },
      {
        id: MoveType.GROUND,
        color: '#e0c068',
        name: 'Ground',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.WATER, MoveType.ICE, MoveType.FIGHTING, MoveType.GROUND, MoveType.PSYCHIC, MoveType.GHOST,
            MoveType.DRAGON, MoveType.DARK, MoveType.FAIRY
          ],
          half: [MoveType.GRASS, MoveType.BUG],
          none: [MoveType.FLYING],
          super: [MoveType.FIRE, MoveType.ELECTRIC, 8, MoveType.ROCK, MoveType.STEEL]
        }
      },
      {
        id: MoveType.FLYING,
        color: '#a890f0',
        name: 'Flying',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ICE, MoveType.POISON, MoveType.GROUND, MoveType.FLYING,
            MoveType.PSYCHIC, MoveType.GHOST, MoveType.DRAGON, MoveType.DARK, MoveType.FAIRY
          ],
          half: [MoveType.ELECTRIC, MoveType.ROCK, MoveType.STEEL],
          none: [],
          super: [MoveType.GRASS, MoveType.FIGHTING, MoveType.BUG]
        }
      },
      {
        id: MoveType.PSYCHIC,
        color: '#f85888',
        name: 'Psychic',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.GROUND,
            MoveType.FLYING, MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.DRAGON, MoveType.FAIRY],
          half: [MoveType.PSYCHIC, MoveType.STEEL],
          none: [MoveType.DARK],
          super: [MoveType.FIGHTING, MoveType.POISON]
        }
      },
      {
        id: MoveType.BUG,
        color: '#a8b820',
        name: 'Bug',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.WATER, MoveType.ELECTRIC, MoveType.ICE, MoveType.GROUND, MoveType.BUG, MoveType.ROCK, MoveType.DRAGON
          ],
          half: [MoveType.FIRE, MoveType.FIGHTING, MoveType.POISON, MoveType.FLYING, MoveType.GHOST, MoveType.STEEL, MoveType.FAIRY],
          none: [],
          super: [MoveType.GRASS, MoveType.PSYCHIC, MoveType.DARK]
        }
      },
      {
        id: MoveType.ROCK,
        color: '#b8a038',
        name: 'Rock',
        active: false,
        effect: {
          normal: [MoveType.NORMAL, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.POISON, MoveType.PSYCHIC, MoveType.ROCK,
          MoveType.GHOST, MoveType.DRAGON, MoveType.DARK, MoveType.FAIRY],
          half: [MoveType.FIGHTING, MoveType.GROUND, MoveType.STEEL],
          none: [],
          super: [MoveType.FIRE, MoveType.ICE, MoveType.FLYING, MoveType.BUG]
        }
      },
      {
        id: MoveType.GHOST,
        color: '#705898',
        name: 'Ghost',
        active: false,
        effect: {
          normal: [MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.FIGHTING, MoveType.POISON,
          MoveType.GROUND, MoveType.FLYING, MoveType.BUG, MoveType.ROCK, MoveType.DRAGON, MoveType.STEEL, MoveType.FAIRY],
          half: [MoveType.DARK],
          none: [MoveType.NORMAL],
          super: [MoveType.PSYCHIC, MoveType.GHOST]
        }
      },
      {
        id: MoveType.DRAGON,
        color: '#7038f8',
        name: 'Dragon',
        active: false,
        effect: {
          normal: [
            MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.FIGHTING,
            MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.DARK
          ],
          half: [MoveType.STEEL],
          none: [MoveType.FAIRY],
          super: [MoveType.DRAGON]
        }
      },
      {
        id: MoveType.DARK,
        color: '#705848',
        name: 'Dark',
        active: false,
        effect: {
          normal: [MoveType.NORMAL, MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.POISON,
          MoveType.GROUND, MoveType.FLYING, MoveType.BUG, MoveType.ROCK, MoveType.DRAGON, MoveType.STEEL],
          half: [MoveType.FIGHTING, MoveType.DARK, MoveType.FAIRY],
          none: [],
          super: [MoveType.PSYCHIC, MoveType.GHOST]
        }
      },
      {
        id: MoveType.STEEL,
        color: '#b8b8d0',
        name: 'Steel',
        active: false,
        effect: {
          normal: [MoveType.NORMAL, MoveType.GRASS, MoveType.FIGHTING, MoveType.POISON, MoveType.GROUND, MoveType.FLYING, MoveType.PSYCHIC,
          MoveType.BUG, MoveType.GHOST, MoveType.DRAGON, MoveType.DARK],
          half: [MoveType.FIRE, MoveType.WATER, MoveType.ELECTRIC, MoveType.STEEL],
          none: [],
          super: [MoveType.ICE, MoveType.ROCK, MoveType.FAIRY]
        }
      },
      {
        id: MoveType.FAIRY,
        color: '#e898e8',
        name: 'Fairy',
        active: false,
        effect: {
          normal: [MoveType.NORMAL, MoveType.WATER, MoveType.ELECTRIC, MoveType.GRASS, MoveType.ICE, MoveType.GROUND, MoveType.FLYING,
          MoveType.PSYCHIC, MoveType.BUG, MoveType.ROCK, MoveType.GHOST, MoveType.FAIRY],
          half: [MoveType.FIRE, MoveType.POISON, MoveType.STEEL],
          none: [],
          super: [MoveType.FIGHTING, MoveType.DRAGON, MoveType.DARK]
        }
      }
    ];
    return { types };
  }

}
