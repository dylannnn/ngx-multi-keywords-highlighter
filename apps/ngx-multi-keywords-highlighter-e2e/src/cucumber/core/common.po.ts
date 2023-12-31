import { CorePageObjects } from './core.po';

export class CommonPageObjects implements CorePageObjects {
  pageObjects = {};

  navigateTo(url = '/') {
    return cy.visit(url);
  }
}
