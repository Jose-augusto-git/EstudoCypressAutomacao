export function validacaoTelaRegistro(){
    //Validação da tela de registro
    cy.get('.ihdmxA').click();

    //Botão voltar
    cy.get('#btnBackButton');

    //campo de email
    cy.get(':nth-child(2) > .input__label').contains('E-mail');
    cy.get('[placeholder="Informe seu e-mail"]').should('be.visible');
    cy.get('input[placeholder="Informe seu e-mail"]').should('have.attr','placeholder','Informe seu e-mail');

    //campo nome
    cy.get(':nth-child(3) > .input__label');
    cy.get('input[placeholder="Informe seu Nome"]').should('have.attr','placeholder','Informe seu Nome');

    //campo senha
    cy.get('.login__password').should('be.visible');
    cy.get('input[placeholder="Informe sua senha"]').should('have.attr','placeholder','Informe sua senha');

    //campo de confirmação de senha
    cy.get('input[placeholder="Informe a confirmação da senha"]').should('have.attr','placeholder','Informe a confirmação da senha');







   
}