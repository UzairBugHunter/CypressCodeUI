export default class RegisterPageFile {
    
    webLocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname', 
        email: '#input-email',       
        telephone: '#input-telephone', 
        password: '#input-password', 
        confirmPassword: '#input-confirm', 
        newsletter: 'input[type="radio"][value="1"]',
        agreeTerms: "input[type='checkbox']",
        continueButton: '.btn.btn-primary',
        accountCreation: '#content'
    }

    openBaseURL() {
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(firstName) {
        cy.get(this.webLocators.firstName).type(firstName)
    }

    enterLastName(lastName) {
        cy.get(this.webLocators.lastName).type(lastName)
    }

    enterEmail(email) {
        cy.get(this.webLocators.email).type(email)
    }

    enterTelephone(telephone) {
        cy.get(this.webLocators.telephone).type(telephone)
    }

    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
    }

    confirmPassword(confirmPassword) {
        cy.get(this.webLocators.confirmPassword).type(confirmPassword)
    }

    selectNewsLetter() {
        cy.get(this.webLocators.newsletter).eq(1).click()
    }

    agreeTerms() {
        cy.get(this.webLocators.agreeTerms).check()
    }

    clickContinue() {
        cy.get(this.webLocators.continueButton).click()
    }

    assertAccountCreation () {
        cy.get(this.webLocators.accountCreation).should('contain', 'Congratulations')
    }
}
