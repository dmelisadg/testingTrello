Feature: Trello Sing-in page

@positive scenario
Scenario: Sign in as a registered user
Given I am on the Sign-in Trello page
When I enter "mymail@somedomain.com" in the "Enter your email" field
* I click the "Continue" button
* I enter "123456789" in the "Enter password" field
* I click the "Log in" button
Then I should see my welcome page

@positive scenario
Scenario: Enable the Sign in registered user with Slack account page
Given I am on the Sign in Trello page
When I click the "Slack" button
And "the your-workspace" field is enabled in Slack login page
And I click the "Continue" button
Then "Sing In With Google" field is enabled in Slack login page

@positive scenario
Scenario: Sign in registered user with Slack account
Given Sign in Trello page
When  I click the "Sing In With Email" button
* I select my email in the list
* "Enter password" field is enabled
* I click the "Continue" button
Then I should see my welcome page

@negative scenario
Scenario: Sign in as a non-registered user
Given I am on the Sign in Trello page
When I enter "mymail@somedomain.com" in the "Enter your email" field
* I click the "Continue" button
* I enter "123456789" in the "Enter password" field
* I click the "Log in" button
Then Validate the error message "Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in."

@positive scenario
Scenario: Create a new board as a new user
Given I am on my new Trello account
When I click the "Create your first board"
* A pop-up field is enabled
* I enter a "myNewBoard" in The "Board title" field 
* the "Create" button is enabled
Then I should see my new board


Feature: Creating elements in My new Trello account.


@negative scenario
Scenario: Create a new board as a new user
Given I am on my new Trello account
When I click the "Create your first board" button
* A pop-up field is enabled
* I enter a "space" in The "Board title" field 
* the "Create" button is not enabled
Then Validate the message "Board title is required"

@positive scenario
Scenario: Create a new card in a new board in "To Do" list
Given I am on "myNewBoard"  board
When I click the "Add a card" button 
And I enter a "myNewCard" in the "Enter a title for this card" field 
And I click the "Add card" button
Then I should see my new card

@negativo scenario
Scenario: Create a new card in a new board in "To Do" list
Given I am on "myNewBoard"  board
When I click the "Add a card" button in "To Do" list
And I enter a "space" in the card field 
And I click the "Add card" button
Then "Enter a title for this card" field disappears

@positive scenario
Scenario: Create a new list on "myNewBoard" board
Given I am on "myNewBoard" board 
When I click the "Add another list" button 
And I enter "myNewList" in the "Enter list title" field 
And I click the "Add list" button
Then I should see my new list


Feature: Filtering a card by keyword.


@positive scenario
Scenario: Filtering cards by name
Given I am on "myNewBoard" page 
When I click the "Filter" button
And I enter "myNewCard" in the "Enter a keyword" field on a pop-up 
Then I should see all cards that match by name






























