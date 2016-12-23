import { SwaggerAngular2DemoPage } from './app.po';

describe('swagger-angular2-demo App', function() {
  let page: SwaggerAngular2DemoPage;

  beforeEach(() => {
    page = new SwaggerAngular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
