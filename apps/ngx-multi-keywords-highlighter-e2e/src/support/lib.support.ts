export class LibSupport {
  visitStorybookComponent(component: string) {
    cy.visit(`/iframe.html?args=&id=${component}&viewMode=story`);
  }

  exist(element: string) {
    cy.get(`[data-testid="${element}"]`).should('exist');
  }

  notExist(element: string) {
    cy.get(`[data-testid="${element}"]`).not('exist');
  }

  existClass(element: string) {
    cy.get(`${element}`).should('exist');
  }

  open(button: string) {
    this.click(button);
  }

  click(button: string) {
    cy.get(`[data-testid="${button}"]`).trigger('click');
  }

  hover(button: string) {
    cy.get(`[data-testid="${button}"]`).trigger('mouseenter');
  }

  validKeywordHighlighter() {
    cy.get('.mh-app-name').contains('Multi keywords highlighter');
    cy.get('.mh-version').contains(/^([0-9]+\.){0,2}(\*|[0-9]+)$/);
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').should('exist');
    cy.get('[data-testid="mkh-keywords-input"]').should('exist');
  }

  expectKewwordsHighlighterOff() {
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').should(
      'not.have.class',
      'mat-mdc-slide-toggle-checked',
    );
    cy.get('[data-testid="highlight-keywords-slide-toggle"] .mh-text').contains(
      'OFF',
    );
  }

  turnOnKewwordsHighlighter() {
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').trigger('click');
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').should(
      'have.class',
      'mat-mdc-slide-toggle-checked',
    );
    cy.get('[data-testid="highlight-keywords-slide-toggle"] .mh-text').contains(
      'ON',
    );
  }

  highlightKewword(keyword: string) {
    this.click('highlight-keywords-button');
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').trigger('click');

    cy.get('[data-testid="mkh-keywords-input"]').type(`${keyword}{enter}`);
    cy.get('.mh-text-highlighted').should('have.length.at.least', 1);
    cy.get('#mh-keyword-count .mat-badge-content').then(($elm) => {
      const badgeCount = parseInt($elm.text().trim(), 10);
      cy.get('mat-chip-row')
        .its('length')
        .then((length) => {
          expect(badgeCount).eq(length);
        });
    });
    cy.get('mat-chip-row').find('[matchipremove]').first().trigger('click');
    cy.clickOutside();
    cy.get('.mh-text-highlighted').should('have.length', 0);
  }

  removeKeyword() {
    cy.get('mat-chip-row').find('[matchipremove]').first().trigger('click');
    cy.clickOutside();
    cy.get('.mh-text-highlighted').should('have.length.at.least', 2);
  }

  highlightMultipleKewword(keywords: string[]) {
    this.click('highlight-keywords-button');
    cy.get('[data-testid="highlight-keywords-slide-toggle"]').trigger('click');

    keywords.forEach((keyword) => {
      cy.get('[data-testid="mkh-keywords-input"]').type(`${keyword}{enter}`);
    });
    // cy.get('[data-testid="mkh-keywords-input"]').type('ipsum,');
    cy.get('.mh-text-highlighted').should('have.length', 5);
    cy.get('#mh-keyword-count .mat-badge-content').then(($elm) => {
      const badgeCount = parseInt($elm.text().trim(), 10);
      cy.get('mat-chip-row')
        .its('length')
        .then((length) => {
          expect(badgeCount).eq(length);
        });
    });
  }
}
