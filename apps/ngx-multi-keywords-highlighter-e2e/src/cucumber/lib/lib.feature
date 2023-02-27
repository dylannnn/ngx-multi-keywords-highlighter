@pageLoadTimeout(6000)
@viewportWidth(1440)
@viewportHeight(900)
@waitForAnimations(true)
@MultiKeywordsHighlighter
Feature: Multi Keywords Highlighter

  @SingleKeyword
  Scenario: Highlight a keyword
    Given I visit the storybook "Multi Keywords Highlighter Component"
    Then I see the "Highlighter button"
    When I click on the "Highlighter button"
    Then I see the "highlighter menu"
    # Then I see the highlighter title Multi keywords highlighter
    # Then I see the highlighter version

  # @MultipleKeyword
  # Scenario: Highlight multiple keywords
  #   When I visit the highlighter component
  #   Then I see the highlighter button
  #   When I click on the highlighter button