export class acessoLoginPage {
    //Botões
    clicarRegistrarConta() {
        cy.get('.ihdmxA').click();
    }

    clicarFecharMensagem(){
        cy.get('.styles__ContainerCloseButton-sc-8zteav-2 > a').click();
    }

    clicarAcessarConta(){
        cy.get('.otUnI').click();
    }


    //***      Armazenamento de dados        ***/

    acessarEmailArmazenado(email) {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').click({force:true});
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email);
    }

    acessarArmazenarSenha(senha){
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true});
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha);

    }

}