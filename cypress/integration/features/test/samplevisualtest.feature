Feature: login


   Scenario: check login visual test
      Given I open IMDB homepage
      And I capture snapshot and compare "loginpage"
      When I SignIn as user
      And I capture snapshot and compare "accountpage"