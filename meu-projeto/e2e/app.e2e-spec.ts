import { MeuProjetoPage } from './app.po';

describe('meu-projeto App', function() {
  let page: MeuProjetoPage;

  beforeEach(() => {
    page = new MeuProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
