import { Teste2Page } from './app.po';

describe('teste2 App', () => {
  let page: Teste2Page;

  beforeEach(() => {
    page = new Teste2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
