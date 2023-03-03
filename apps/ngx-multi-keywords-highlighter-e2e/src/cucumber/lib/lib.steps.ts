import { CoreSteps } from '../core/core.steps';
import { LibPageObjects } from './lib.po';
import libData from './lib.data';

beforeEach(() => {
  cy.viewport('macbook-15');
});

export class LibPageSteps extends LibPageObjects implements CoreSteps {

  constructor() {
    super();
    this.initSteps();
  }

  initSteps() {
    this.addCommonSteps(this.pageObjects, libData);
  }
}

export const libPageSteps = new LibPageSteps();