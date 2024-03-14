Feature: Creating a new list on a Trello board

  Scenario: Create a new list on a board
    Given I am logged into my Trello account
    When I create a new list on a board
    Then I should see the new list on the board
    Then I logged out to session