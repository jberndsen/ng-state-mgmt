import { RootPage } from './app.po';

describe('seed App', function() {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  it('should display the welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to your new app!');
  });
});
