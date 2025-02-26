import { validacaoTelaLoginLogin } from "../utils/login/validacaoTelaLogin"
//import { registroLogin } from "../utils/login/registrar/registrarLogin";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://bugbank.netlify.app/#')

    validacaoTelaLoginLogin();
  //  registroLogin();

  })
})