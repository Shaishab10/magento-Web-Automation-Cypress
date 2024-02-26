class LoginPage{

    userLogin(email, password){
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('.panel > .header > .authorization-link > a').click();
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
        
        
    }

    validAssertion(){
        cy.get('.panel > :nth-child(2)').should('have.text','Welcome').wait(1000);
    }


}

export default LoginPage;