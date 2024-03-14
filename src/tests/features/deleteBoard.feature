Feature: Deleting the first board in Trello

  Scenario: Delete the first board
    Given I am logged into my Trello account
    When I delete the first board
    Then the board should be closed
    Then I logged out to session