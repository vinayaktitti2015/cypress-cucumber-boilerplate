const inputEmail = '#ap_email'
const inputPassword = '#ap_password'
const buttonSubmit = '//input[@id=\'signInSubmit\']'
const label_AccountName = '//span[contains(@class,\'imdb-header__account-toggle--logged-in\')]'


export const loginPage = {
  enterEmail (args) {
    cy.get(inputEmail)
            .clear()
            .type(args)
  },
  enterPassword (args) {
    cy.get(inputPassword)
            .clear()
            .type(args)
  },
  clickSubmit () {
    cy.xpath(buttonSubmit)
            .click()
  },
  signIn () {
    cy.fixture('testdata').then((data) => {
      this.enterEmail(data.validemail)
      this.enterPassword(data.password)
      this.clickSubmit()
    })
  },
  verifyAccountNameDisplayed () {
    cy.fixture('testdata').then((data) => {
      cy.xpath(label_AccountName)
            .invoke('text')
            .should('contain', data.username)
    })

  },

}
