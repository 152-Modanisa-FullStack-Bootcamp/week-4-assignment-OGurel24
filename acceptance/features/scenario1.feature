Feature: Home Page
  Scenario: User should see some videos on main page
    Given that User goes to Video Site Project's HomePage
    When page is loaded
    Then User can see some of videos' title like
    | Vue.js Course for Beginners [2021 Tutorial] |
    | Vue JS Crash Course                         |
    | ue 3 - What's New? What Changed?            |