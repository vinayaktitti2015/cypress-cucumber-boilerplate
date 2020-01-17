import { loginPage } from '../../pageobjects/loginobjects'

Given('I open IMDB homepage', () => {
    cy.visit('/');
});

When('I SignIn as user', () => {
    loginPage.signIn();
});

then('I capture snapshot and compare {string}', (string) => {
    cy.matchImageSnapshot(string);
});