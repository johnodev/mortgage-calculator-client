import { MortgageCalculatorClientPage } from './app.po';

describe('mortgage-calculator-client App', () => {
  let page: MortgageCalculatorClientPage;

  beforeEach(() => {
    page = new MortgageCalculatorClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
