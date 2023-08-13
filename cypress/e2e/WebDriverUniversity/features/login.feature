@regression
# npx cypress-tags run -e TAGS="@regression" --headed chrome
Feature: WebdriverUniversity Login Page

    # Scenario: Login using valid credentials

    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following messsage validation succeeded

    # Scenario: Login using invalid credentials

    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver555
    #     And I click on the login button
    #     Then I should be presented with the following messsage validation failed

    # Scenario: Login using invalid credentials

    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username user
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following messsage validation failed

    @login
    Scenario Outline: Test Login via WebdriverUniversity Login Portal

        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following messsage <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | user      | webdriver123 | validation failed    |