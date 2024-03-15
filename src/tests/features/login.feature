Feature: Trello Sign-in page

  Background:
    Given I am on the Trello Sign in Page
  @positive_scenario @login
  Scenario Outline: Sign in with <credential type> credentials
    When I sign in with '<credential type>' credentials
    Then I should see '<expected message>'

    Examples:
      | credential type | expected message   |
      | valid           | Test MelisaDG (testmelisadg)    |
      | invalid         | Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.   |
