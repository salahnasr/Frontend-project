import { salahPage } from './app.po';

describe('salah App', () => {
  let page: salahPage;

  beforeEach(() => {
    page = new salahPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
