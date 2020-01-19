Feature: IMDB Visual Test


   Scenario: check IMDB visual test
      Given I open IMDB homepage
      And I capture snapshot and compare "homepage"
      When I click on "Sign In"
      And I press button "Sign in with IMDb"
      And I capture snapshot and compare "loginpage"
      When I SignIn as user
      And I capture snapshot and compare "accountpage"