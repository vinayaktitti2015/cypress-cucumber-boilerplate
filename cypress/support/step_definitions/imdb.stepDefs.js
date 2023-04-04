import { loginPage } from '../../pageobjects/IMDB_PageObjects'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('I open IMDB homepage', () => {
    cy.visit('/');
});
Given('I open Internet herokuapp page', () => {
    cy.visit('https://the-internet.herokuapp.com/');
});
When('I SignIn as user', () => {
    loginPage.signIn();
});
then('The account name should be displayed', () => {
    loginPage.verifyAccountNameDisplayed()
})

then('I select random sortBy value', () => {
    loginPage.selectRandomSortBy();
})
then('I click random link', () => {
    loginPage.clickRandomTitle();
})
