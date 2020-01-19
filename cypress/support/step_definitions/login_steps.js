import { loginPage } from '../../pageobjects/Login_PageObjects'

Given('I open IMDB homepage', () => {
    cy.visit('/');
});
When('I SignIn as user', () => {
    loginPage.signIn();
});
then('The account name should be displayed', ()=>{
    loginPage.verifyAccountNameDisplayed()
})
