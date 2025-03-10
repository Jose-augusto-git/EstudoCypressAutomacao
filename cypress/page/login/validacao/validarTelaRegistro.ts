export class validarTelaRegistro{

        //Botão voltar
        validarBotaoVoltar(){
            cy.get('#btnBackButton');
            cy.get('#btnBackButton').should('have.text','Voltar ao login');
        }

        //campo de email
        validarCampoEmail(){
            cy.get(':nth-child(2) > .input__label').should('have.text','E-mail');
            cy.get('[placeholder="Informe seu e-mail"]').should('be.visible');
            cy.get('input[placeholder="Informe seu e-mail"]').should('have.attr','placeholder','Informe seu e-mail');
        }
    
        //campo nome
        validacaoCampoNome(){
            cy.get(':nth-child(3) > .input__label');
            cy.get('input[placeholder="Informe seu Nome"]').should('have.attr','placeholder','Informe seu Nome');
        }

        //campo senha
        validacaoCampoSenha(){
            cy.get('.login__password').should('be.visible');
            cy.get('input[placeholder="Informe sua senha"]').should('have.attr','placeholder','Informe sua senha');
        }

        //campo de confirmação de senha
        validacaoCampoConfirmacaoSenha(){
            cy.get('.input__default').eq(0).should('be.visible');
            cy.get('input[placeholder="Informe a confirmação da senha"]').should('have.attr','placeholder','Informe a confirmação da senha');
        }
    
    
    
}