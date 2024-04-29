Feature: Trello Sign-in page

  Background:
    Given I am on the Trello Sign in Page
 @positive_scenario @login
  Scenario: Sign in with valid credentials
    When I sign in with 'valid' credentials
    Then I should see 'Test MelisaDG (testmelisadg)'
    And I logged out to session

  @negative_scenario @login
  Scenario: Sign in with invalid credentials
    When I sign in with 'invalid' credentials
    Then I should see 'Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.'


