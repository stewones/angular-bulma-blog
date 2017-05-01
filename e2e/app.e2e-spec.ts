import { BlogPage } from './app.po';

describe('blog App', () => {
  let page: BlogPage;

  beforeEach(() => {
    page = new BlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
