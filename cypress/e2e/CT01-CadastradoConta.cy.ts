import { validacaoTelaLogin } from "../utils/login/validacaoTelaLogin"
import { registroLogin } from "../utils/login/registrar/registrarLogin";

describe('Cadastrando um conta', () => {
  it('passes', () => {
    cy.visit('https://bugbank.netlify.app/#')

    validacaoTelaLogin();
    registroLogin();

  })
})