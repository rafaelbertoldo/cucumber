# Criando a Automação de Testes

Para automatizar os testes com Cucumber.js e Selenium WebDriver, começamos criando o arquivo `.feature`, que descreve os cenários de teste utilizando a linguagem **Gherkin** (usada no BDD - Behavior Driven Development).

## 1. Criando o Arquivo `.feature`

O arquivo `.feature` contém os cenários de teste escritos em Gherkin, uma linguagem simples e legível, que descreve as funcionalidades e comportamentos esperados do sistema. Vamos criar um arquivo de exemplo chamado `login.feature`.

### Exemplo de Arquivo `login.feature`

```gherkin
Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "1q2w3e4r"
    Then o usuário deve ser redirecionado para a página Bem-Vindo

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "senha_errada"
    Then o sistema deve exibir uma mensagem de erro de login
  
  Scenario: Tentar acessar a página sem as credenciais
    Given que o usuário está na página de login
    When o usuário não insere o nome de usuário e senha
    Then o sistema deve exibir uma mensagem de erro informando que os dados são obrigatórios
```

No exemplo acima, temos três cenários de teste relacionados ao processo de login de um usuário, cobrindo diferentes fluxos e comportamentos esperados.

## 2. Criando os Passos de Automação

Após criar o arquivo `.feature`, é necessário criar um arquivo de "steps", onde você irá definir a implementação dos passos descritos no arquivo `.feature`. Vamos criar o arquivo `loginSteps.js`, que será responsável por automatizar os passos definidos no `.feature` utilizando o Selenium WebDriver.

### Exemplo de Arquivo `loginSteps.js`

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
  await driver.sleep(2000);
});

When('o usuário insere o nome de usuário {string} e a senha {string}', async function (username, password) {
  const usernameField = await driver.findElement(By.id('username'));
  const passwordField = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.id('button'));
  
  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  await driver.sleep(2000);
  await loginButton.click();
});

Then('o usuário deve ser redirecionado para a página Bem-Vindo', async function () {
  const welcomeMessage = await driver.wait(until.elementIsVisible(driver.findElement(By.id('inicio'))), 5000);
  const messageText = await welcomeMessage.getText();
  expect(messageText).to.include('Bem-vindo');
  await driver.sleep(2000);
});

Then('o sistema deve exibir uma mensagem de erro de login', async function () {
  const errorMessage = await driver.findElement(By.id('error-message'));
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('E-mail ou senha inválidos!');
  await driver.sleep(2000);
});

When('o usuário não insere o nome de usuário e senha', async function () {
  const usernameField = await driver.findElement(By.id('username'));
  const passwordField = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.id('button'));
  
  await usernameField.clear();
  await passwordField.clear();
  await loginButton.click();
  await driver.sleep(2000);
});

Then('o sistema deve exibir uma mensagem de erro informando que os dados são obrigatórios', async function () {
  const errorMessage = await driver.wait(until.elementLocated(By.id('error-message')), 5000);
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('E-mail e senha são obrigatórios!');
});

After(async function () {
  if (driver) {
    await driver.quit();
  }
});
```

Neste arquivo, estamos utilizando o **Selenium WebDriver** para interagir com a página de login e o **Chai** para realizar as asserções, verificando se os resultados estão corretos. A estrutura do código é baseada nos **hooks** do Cucumber, como `Before`, `After`, e os passos `Given`, `When`, `Then`, que correspondem aos cenários definidos no arquivo `.feature`.

## 3. Estrutura do Projeto

A estrutura do projeto será semelhante à seguinte:

```
.
features
├── login.feature
└── steps
    └── loginSteps.js
```

Nesta estrutura, temos o arquivo `login.feature` dentro da pasta `features` e o arquivo `loginSteps.js` dentro da pasta `steps`.

## Próximos Passos: Execução com Cucumber.js

Agora que a automação foi configurada, você pode executar os testes com o Cucumber. Para aprender como executar os testes automatizados com Cucumber.js, consulte a seção [Executando a Automação](execucao.md).
