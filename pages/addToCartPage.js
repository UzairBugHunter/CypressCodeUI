export default class AddToCart {

    webLocators = {
        searchItem : '.form-control.input-lg',
        clickSearchIcon : '.btn.btn-default.btn-lg',
        clickProduct : 'img[title = "MacBook"]',
        addToCart : '#button-cart',
        verifySuccessAlert : '.alert.alert-success.alert-dismissible'
    }

    searchProduct (product) {
        cy.get(this.webLocators.searchItem).type(product)
    }

    clickSearchIcon (){
        cy.get(this.webLocators.clickSearchIcon).click()
    }

    clickProduct (){
        cy.get(this.webLocators.clickProduct).eq(1).click()
    }

    addToCart (){
        cy.get(this.webLocators.addToCart).click()
    }

    verifySuccess (){
        return cy.get(this.webLocators.verifySuccessAlert)
    }
}