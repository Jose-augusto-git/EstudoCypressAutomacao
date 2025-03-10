import { validacaoTelaLogin } from "../page/login/validacao/validarTelasLogin";
import { validarTelaRegistro } from "../page/login/validacao/validarTelaRegistro";
import { acessoLoginPage } from "../page/login/acoes/acessoLoginPage";
import { cadastroLoginPage } from "../page/login/acoes/cadastroContaPage";
import { fakerDE as faker } from '@faker-js/faker';

describe('Cadastrando um conta e acesso de login', () => {
  
  before(() => {
      const email = faker.internet.email();
      const senha = faker.internet.password();

      cy.wrap(email).as('emailCadastrado');
      cy.wrap(senha).as('senhaSalva');
  })


  it('passes', function () {
    cy.visit('https://bugbank.netlify.app/#')

    const validarLogin = new validacaoTelaLogin();
    const validarRegistro = new validarTelaRegistro();
    const login = new acessoLoginPage();
    const registro = new cadastroLoginPage();

    //Validação da tela de login
    validarLogin.validacaoLogo();
    validarLogin.validacaoTituloLogin();
    validarLogin.valicaoTextoEmail();
    validarLogin.validacaoCampoLogin();
    validarLogin.validacaoTextoSenha();
    validarLogin.validacaoCampoSenha();
    validarLogin.validacaoBotaoAcessar();
    validarLogin.validacaoBotaoRegistro();
    validarLogin.validacaoTituloInfo();
    validarLogin.validacaoTextos();

    //clicar botao registro
    login.clicarRegistrarConta();

    //Validacao da tela de registro
    validarRegistro.validarBotaoVoltar();
    validarRegistro.validarCampoEmail();
    validarRegistro.validacaoCampoNome();
    validarRegistro.validacaoCampoSenha();
    validarRegistro.validacaoCampoConfirmacaoSenha();


    //Preencher registro
    registro.preencherEmail(this.emailCadastrado);
    registro.preencherNome();
    registro.preencherSenha(this.senhaSalva);
    registro.preencherConfirmarSenha(this.senhaSalva);
    registro.clicarCadastrar();

    //mensagem sucesso
    validarLogin.validarTextoSucesso();

    //tela login
    login.clicarFecharMensagem();

    login.acessarEmailArmazenado(this.emailCadastrado);
    login.acessarArmazenarSenha(this.senhaSalva);
    login.clicarAcessarConta();

  })
})