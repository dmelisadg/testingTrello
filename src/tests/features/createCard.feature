Feature: Creating a new card on the first list of a Trello board

  Scenario: Create a new card on the first list
    Given I am logged into my Trello account
    When I create a new card on the first list of the board
    Then I should see the new card in the first list
    Then I logged out to session