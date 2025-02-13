# Automação do navegador

O Cucumber não é uma ferramenta de automação de navegador, mas funciona bem com as seguintes ferramentas de automação de navegador.

## Selenium 

O WebDriver foi projetado para fornecer uma interface de programação mais simples e concisa do que algumas outras ferramentas. O Selenium WebDriver oferece melhor suporte a páginas da web dinâmicas, onde elementos de uma página podem mudar sem que a própria página seja recarregada. O objetivo do WebDriver é fornecer uma API orientada a objetos bem projetada que forneça suporte aprimorado para problemas modernos de testes avançados de aplicativos da web.

O Selenium-WebDriver pode ser usado em diversas linguagens de programação, incluindo Java, JavaScript, Ruby e Kotlin.

Vejamos um exemplo do Cucumber usando o Selenium WebDriver em testes de IU, convertendo o Selenium WebDriver Getting Started .

Podemos expressar o exemplo como o seguinte cenário:

```yaml
Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "1q2w3e4r"
    Then o usuário deve ser redirecionado para a página Bem-Vindo

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "senha_errada"
    Then o sistema deve exibir uma mensagem de erro de login
```

```javascript
import { Given, When, Then, AfterAll, After, Before } from '@cucumber/cucumber';
import { Builder, By, Capabilities, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';

// Declarar a variável 'driver' fora para ser acessada em todos os hooks.
let driver;

Before(async function () {
  // Inicializar o driver no hook 'Before' para garantir que esteja disponível antes de cada cenário
  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  driver = await new Builder().withCapabilities(capabilities).build();
});

Given('que o usuário está na página de login', async function () {
  await driver.get('https://horadoqa.github.io/login/');
});

When('o usuário insere o nome de usuário {string} e a senha {string}', async function (username, password) {
  const usernameField = await driver.findElement(By.id('username'));
  const passwordField = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.xpath("//button[contains(text(),'Entrar')]"));

  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  await loginButton.click();
});

Then('o usuário deve ser redirecionado para a página Bem-Vindo', async function () {
  const welcomeMessage = await driver.wait(until.elementIsVisible(driver.findElement(By.id('inicio'))), 1000);
  const messageText = await welcomeMessage.getText();
  console.log("Mensagem de boas-vindas:", messageText);
  expect(messageText).to.include('Bem-vindo');
});


Then('o sistema deve exibir uma mensagem de erro de login', async function () {
  const errorMessage = await driver.findElement(By.id('error-message'));
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('E-mail ou senha inválidos!');
});

// Fechar o navegador após cada cenário
After(async function () {
  if (driver) {
    await driver.quit();  
  }
});

```

## Em seguida, defina a propriedade do browser ao executar o Cucumber:

```bash
mvn test -Dbrowser=chrome
```

[Próximo passo... Execução](execucao.md)