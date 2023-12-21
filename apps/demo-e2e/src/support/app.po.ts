export class AppPageObject {
  getToggleHighlightButton = () =>
    cy.get(`[data-testid="toggle-highlight-button"]`);
  getDefaultToggleHighlightButton = () => cy.get(`[data-testid="custom-lib"]`);
  getToggleHighlightElement = () =>
    cy.get(
      `router-outlet[name="multi-keywords-highlighter"] + mkh-multi-keywords-highlighter`,
    );
  getCustomHighlightElement = () =>
    cy.get(`nav [data-testid="highlight-keywords-button"]`);
}
