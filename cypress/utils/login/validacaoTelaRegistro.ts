export function validacaoTelaLoginLogin(){
    //Validação da tela de login
    //Logo
    cy.get('[src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbugbank.ede6fc83.png&w=640&q=75"]');

    //Titulos
    cy.get('.pages__Title-sc-1ee1f2s-4').contains('O banco com bugs e falhas do seu jeito').should('be.visible');
    cy.get('.pages__Text-sc-1ee1f2s-5').contains('Faça transferências e pagamentos com bugs e pratique testes com sucesso em um cenário quase real!').should('be.visible');

    //Login
    cy.get('.input__label').contains('E-mail').should('be.visible');

    //Campo de login
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').should('be.visible');
    cy.get('input[placeholder="Informe seu e-mail"]').should('have.attr','placeholder','Informe seu e-mail');

    //Senha
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__label').contains('Senha').should('be.visible');

    //Campo de senha
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').should('be.visible');
    cy.get('input[placeholder="Informe sua senha"]').should('have.attr','placeholder','Informe sua senha');

    //botao de acessar
    cy.get('.otUnI').should('be.visible');

    //Botao de registrar
    cy.get('.ihdmxA').should('be.visible');

    //titulo de informação
    cy.get('.styles__Link-sc-osobjw-0').contains('Conheça nossos requisitos').should('be.visible');

    //validação do texto
    cy.get('.styles__WarnigWrapper-sc-1ota0lw-0').contains('A aplicação não conta com um banco de dados, todas as informações são armazenadas em memória local').should('be.visible');

    //validar campos de registro
    cy.get('.ihdmxA').click();

    //

}