@MultiKeywordsHighlighter
Feature: Multi Keywords Highlighter
    @SingleKeyword
    Scenario: Highlight a keyword
        Given I visit the storybook "Multi Keywords Highlighter Component"
        Then I see the "Highlighter button"
        When I click on the "Highlighter button"
        Then I see the "Highlighter menu"
        Then I enable the "Highlighter toggle button"
        When I search for "<keyword>"
        Then I see "<quantity>" keyword been highlighted

        Examples:
          | keyword | quantity |
          | Lorem   | 1        |

    @MultipleKeyword
    Scenario Outline: Highlight multiple keywords
        Given I visit the storybook "Multi Keywords Highlighter Component"
        Then I see the "Highlighter button"
        When I click on the "Highlighter button"
        Then I see the "Highlighter menu"
        Then I enable the "Highlighter toggle button"
        When I search for "<keyword>"
        Then I see "<quantity>" keyword been highlighted

        Examples:
          | keyword | quantity |
          | Lorem   | 1        |
          | ipsum   | 2        |
          | nulla   | 2        |