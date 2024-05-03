import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LibPageObjects } from './lib.po';

const { Given, When, Then } = createBdd();

export class LibPageSteps extends LibPageObjects {
  constructor() {
    super();
    this.initSteps();
  }

  initSteps() {
    Given('I visit the storybook {string}', async ({ page }, term) => {
      await page.goto(this.getPageData(term));
    });

    Then('I see the {string}', async ({ page }, term) => {
      page.getByTestId(this.getPageData(term));
    });

    When('I click on the {string}', async ({ page }, term) => {
      await page.getByTestId(this.getPageData(term)).click();
    });

    Then('I enable the {string}', async ({ page }, term) => {
      page.getByTestId(this.getPageData(term)).click();
    });

    When('I search for {string}', async ({ page }, term) => {
      await page.getByTestId('mkh-keywords-input').fill(term);
    });

    Then('I see {string} keyword been highlighted', async ({ page }, term) => {
      await expect(page.locator('.mh-text-highlighted')).toHaveCount(
        Number(term),
      );
    });
  }
}

export const libPageSteps = new LibPageSteps();
