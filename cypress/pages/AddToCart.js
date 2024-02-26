class AddToCart{

    addCart(){
        cy.get(':nth-child(3) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-52').click();
        cy.get('#product-addtocart-button > span').click();
    }

    validAssertion(){
        cy.get('.message-success > div').should('have.text','\nYou added Argus All-Weather Tank to your shopping cart.').wait(1000);
    }
}

export default AddToCart;