import { AppPageObject } from '../support/app.po';

const appPage = new AppPageObject();

describe('demo', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
  });

  describe('toggle highlighter button on auxiliary route', () => {
    it('should show the Highlighter button and toggle the multi keywords highlighter', () => {
      appPage.getToggleHighlightButton().should('exist');
      appPage.getToggleHighlightElement().should('not.exist');
      cy.url().should(
        'not.include',
        '(multi-keywords-highlighter:lib-experimental)',
      );

      appPage.getToggleHighlightButton().trigger('click');
      cy.url().should(
        'include',
        '(multi-keywords-highlighter:lib-experimental)',
      );
      appPage.getToggleHighlightElement().should('exist');

      appPage.getToggleHighlightButton().trigger('click');
      appPage.getToggleHighlightElement().should('not.exist');
      cy.url().should(
        'not.include',
        '(multi-keywords-highlighter:lib-experimental)',
      );
    });
  });

  // describe('default highlighter', () => {
  //   it('');
  // });

  // describe('dynamic component lib with highlighter', () => {
  //   it('');
  // });
});
