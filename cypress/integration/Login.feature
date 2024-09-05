Feature: Orange HRM Login feature

    Throuhg this feature user is able to login in to Orange HRM application

    Scenario: user should be able to login with valid credentials 
    Given Visit Orange HRM Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the Orange HRM Website
    Then I should be redirected to the dashboard