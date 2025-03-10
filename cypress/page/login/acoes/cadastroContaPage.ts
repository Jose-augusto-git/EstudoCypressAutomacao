import { fakerDE as faker } from '@faker-js/faker';

export class cadastroLoginPage{

        //campo email
        preencherEmail(email){
            cy.get('.kOeYBn, :nth-child(2) > .input__default').click({force:true});
            cy.get('.kOeYBn, :nth-child(2) > .input__default').type(email);

        }
    
        //campo nome
        preencherNome(){
            cy.get(':nth-child(3) > .input__default').click({force:true});
            cy.get(':nth-child(3) > .input__default').type(faker.internet.username());

        }
    
        //campo senha
        preencherSenha(senha){
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true});
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha);

        }

        //confirmação da senha
        preencherConfirmarSenha(senha){
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true});
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha);
        }
    
        clicarCadastrar(){
            cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true});
        }

    

}