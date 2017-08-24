import { InicialPage } from './app.po';

describe('inicial App', () => {
  let page: InicialPage;

  beforeEach(() => {
    page = new InicialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
