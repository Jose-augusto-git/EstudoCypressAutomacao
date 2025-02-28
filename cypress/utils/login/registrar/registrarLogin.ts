import { fakerDE as faker } from '@faker-js/faker';

export function registroLogin(){

    //campo email
    cy.get('.kOeYBn, :nth-child(2) > .input__default').click({force:true});
    cy.get('.kOeYBn, :nth-child(2) > .input__default').type(faker.internet.email());

    //campo nome
    cy.get(':nth-child(3) > .input__default').click({force:true});
    cy.get(':nth-child(3) > .input__default').type(faker.internet.username());

    //campo senha
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true});
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('1234');

    //confirmação da senha
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true});
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('1234');

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true});

    cy.get('.styles__ContainerInformations-sc-8zteav-3').should('be.visible');


}