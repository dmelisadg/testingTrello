  Feature: Trello Sign-in page with Slack account
  @positive_scenario
  Scenario: Enable the Sign in registered user with Slack account page
    Given I am on the Sign-in Trello page
    And I login with Slack account "testing-training-talk"
    Then I should see the "Sign In With Google" button

  @positive_scenario
  Scenario: Sign in with Slack account and Gmail account registered user
    Given I am on the Sign-in Trello page
    And I login with Slack account "testing-training-talk"
    When I sign in with registered Gmail credentials
    Then I should see the title board