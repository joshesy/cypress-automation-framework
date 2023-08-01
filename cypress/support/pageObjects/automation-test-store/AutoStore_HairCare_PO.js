class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach((element) => {
            cy.addProductToBasket(element).debug()
        })
    }
}
export default AutoStore_HairCare_PO