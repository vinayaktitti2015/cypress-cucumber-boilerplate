Feature: Sample Login Test

   Scenario: check valid login test
      Given I open IMDB homepage
      When I click on "Sign In"
      And I press button "Sign in with IMDb"
      Then I should see "Sign-In" text displayed
      When I SignIn as user
      Then I should see title "Ratings, Reviews, and Where to Watch the Best Movies & TV Shows"
      And The account name should be displayed




