const email = '#ap_email';
const password = '#ap_password';
const submit = "//input[@id='signInSubmit']";


export const loginPage = {
    enterEmail(args) {
        cy.get(email)
            .clear()
            .type(args);
    },
    enterPassword(args) {
        cy.get(password)
            .clear()
            .type(args)
    },
    clickSubmit() {
        cy.xpath(submit).click();
    },
    signIn() {
        cy.fixture('testdata').then((data) => {
            this.enterEmail(data.validemail);
            this.enterPassword(data.password);
            this.clickSubmit();
        })
    }

}
