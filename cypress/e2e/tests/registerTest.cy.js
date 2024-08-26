import RegisterPageFile from '../../../pages/registerPage.js'
import { faker } from '@faker-js/faker';

const registerObj = new RegisterPageFile();
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email()
const telephone = faker.phone.number()
const password = faker.internet.password()

describe ("Automation flow of cypress", ()=> {

    it("Registeration Flow", ()=> {
        registerObj.openBaseURL()
        registerObj.enterFirstName(firstName)
        registerObj.enterLastName(lastName)
        registerObj.enterEmail(email)
        registerObj.enterTelephone(telephone)
        registerObj.enterPassword(password)
        registerObj.confirmPassword(password)
        registerObj.selectNewsLetter()
        registerObj.agreeTerms()
        registerObj.clickContinue()
        registerObj.assertAccountCreation()
    })
})