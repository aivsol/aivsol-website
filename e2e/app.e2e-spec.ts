import { AivsolWebsitePage } from './app.po';

describe('aivsol-website App', () => {
  let page: AivsolWebsitePage;

  beforeEach(() => {
    page = new AivsolWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
