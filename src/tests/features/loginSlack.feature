  Feature: Trello Sign-in page with Slack account
  @login
  Scenario: Enable the Sign in registered user with Slack account page
    Given I am on the Trello Sign in Page
    And I login with Slack account "testing-training-talk"
    Then I should see the "Sign In With Google" button

  @login
  Scenario: Sign in with Slack account and Gmail account registered user
    Given I am on the Trello Sign in Page
    And I login with Slack account "testing-training-talk"
    When I sign in with registered Gmail credentials
    Then I should see the title board
    Then I logged out to session