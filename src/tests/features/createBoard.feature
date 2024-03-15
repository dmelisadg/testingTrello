Feature: Creating a new board in Trello
@positive_scenario  @create
  Scenario: Create a new board with a random name
    Given I am logged into my Trello account
    When I create a new board with a random name
    Then I should see the new board
    Then I logged out to session

@negative_scenario @create
  Scenario: Create a new board with an empty title
    Given I am logged into my Trello account
    When I attempt to create a new board with an empty title
    Then I should see an error message indicating that the board title is required
    Then I logged out to session
