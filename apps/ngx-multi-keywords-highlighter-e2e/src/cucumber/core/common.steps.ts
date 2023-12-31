import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { CommonPageObjects } from './common.po';
import { CoreSteps } from './core.steps';

export class CommonSteps extends CommonPageObjects implements CoreSteps {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initSteps(): void {}

  /**
   * Helper Method - To retrive common setps based on pageObject
   * @param pageObject Page object
   * @param dataSet Data set
   */
  addCommonSteps(
    pageObject: { [key: string]: string },
    dataSet: { [key: string]: string },
  ) {
    /**
     * Visit a URL
     * @param term
     * @example I visit the "Multi Keywords Highlighter Component"
     */
    Given(
      new RegExp(`I visit the storybook "([^"]*)"$`),
      (component: string) => {
        // /iframe.html?args=&id=library-multi-keywords-highlighter--playground&viewMode=story
        // pageObject[dataSet[component]]
        cy.visit(
          `/iframe.html?args=&id=${
            pageObject[dataSet[component]]
          }&viewMode=story`,
        );
      },
    );

    /**
     * @example I see the "highlighter button"
     */
    Then(new RegExp(`I see the "([^"]*)"$`), (term: string) => {
      cy.get(`[data-testid="${pageObject[dataSet[term]]}"]`).should('exist');
    });

    /**
     * @example I click on the "highlighter button"
     */
    When(new RegExp(`I click on the "([^"]*)"$`), (term: string) => {
      cy.get(`[data-testid="${pageObject[dataSet[term]]}"]`)
        .debug()
        .trigger('click');
    });
  }
}

export const commonSteps = new CommonSteps();
