Feature: Functionality for Searching Hotels

In order to select desired hotel
As a user
I want to have a functionality to search for hotels


  @smoke
  Scenario Outline: Search hotels with an invaild city
    Given As a room77 user I launch room77 app
    When I search hotels with "<name>"
    Then I should see "<AlertText>" alert
Examples:
| name | AlertText |
| aaaaaaaaaaaaaaaaa_aaaaaaaaaaaaaa  | Please type in a location  |