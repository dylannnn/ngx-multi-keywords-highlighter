import { createBdd } from 'playwright-bdd';

const { BeforeAll, AfterAll } = createBdd();

/**
 * Hooks documentation
 * https://vitalets.github.io/playwright-bdd/#/writing-steps/hooks
 */
BeforeAll(async function ({ $workerInfo, browser }) {
  // runs when each worker starts
});

AfterAll(async function ({ $workerInfo, browser }) {
  // runs when each worker ends
});
