import { UIFrameworkPage } from './app.po';

describe('ui-framework App', () => {
  let page: UIFrameworkPage;

  beforeEach(() => {
    page = new UIFrameworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
