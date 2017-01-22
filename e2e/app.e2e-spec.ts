import { PokemonTypeMatchupPage } from './app.po';

describe('pokemon-type-matchup App', function() {
  let page: PokemonTypeMatchupPage;

  beforeEach(() => {
    page = new PokemonTypeMatchupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
