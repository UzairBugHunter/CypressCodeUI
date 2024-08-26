import AddToCart from "../../../pages/addToCartPage.js"
import testData from "../../fixtures/testData.json"

const addToCart = new AddToCart()


describe("Add to cart Flow", ()=> {
    before("Sign in", ()=>{
        cy.Login(testData.login.username, testData.login.password)
    })

    it("Add to card test case", ()=>{
        addToCart.searchProduct(testData.product.productName)
        addToCart.clickSearchIcon()
        addToCart.clickProduct()
        addToCart.addToCart()
        addToCart.verifySuccess().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})