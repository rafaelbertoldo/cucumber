# cucumber


**"O Cucumber permite executar testes que foram escritos usando a linguagem Gherkin."**

Explicação:
- O **Cucumber** é uma ferramenta de automação de testes que lê arquivos de teste escritos na linguagem **Gherkin**, que é uma linguagem estruturada e legível por humanos. Esses arquivos descrevem os comportamentos esperados de um sistema de uma forma simples e intuitiva, com uma sintaxe que segue a estrutura **Given-When-Then** (Dado-Quando-Então).
  
Então, quando você escreve testes com **Gherkin**, o Cucumber os usa para executar os testes e verificar se o sistema se comporta conforme descrito nesses cenários.


Passos para criar um teste de login utilizando **Cucumber** com **JavaScript** e **Selenium WebDriver**. 

### 1. **Instalar as dependências**
Para começar, você precisa instalar as bibliotecas necessárias. Primeiramente, crie um projeto Node.js e instale as dependências:

```bash
npm init -y
npm install @cucumber/cucumber selenium-webdriver chai
```

- `@cucumber/cucumber`: A biblioteca principal do Cucumber para JavaScript.
- `selenium-webdriver`: A biblioteca do Selenium para automação de browsers.
- `chai`: Uma biblioteca de asserções para facilitar a verificação dos resultados nos testes.

### 2. **Criar o arquivo de Feature**
O arquivo de feature é onde você descreve os cenários em Gherkin. Crie uma pasta chamada `features` e dentro dela crie o arquivo `login.feature`:

#### `features/login.feature`
```gherkin
Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario_teste" e a senha "senha123"
    Then o usuário deve ser redirecionado para a página inicial

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario_teste" e a senha "senha_errada"
    Then o sistema deve exibir uma mensagem de erro de login
```

### 3. **Implementar os Steps**
Agora, você precisa implementar as etapas (steps) definidas no arquivo de feature. Crie uma pasta `steps` e dentro dela crie o arquivo `loginSteps.js`:

#### `features/steps/loginSteps.js`
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

let driver;

Given('que o usuário está na página de login', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://exemplo.com/login'); // Substitua pela URL do seu site de login
});

When('o usuário insere o nome de usuário {string} e a senha {string}', async function (username, password) {
  const usernameField = await driver.findElement(By.id('username'));
  const passwordField = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.id('login-button'));
  
  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  await loginButton.click();
});

Then('o usuário deve ser redirecionado para a página inicial', async function () {
  await driver.wait(until.urlIs('http://exemplo.com/home'), 5000); // Substitua pela URL de sua página inicial
  const currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).to.equal('http://exemplo.com/home');
  await driver.quit();
});

Then('o sistema deve exibir uma mensagem de erro de login', async function () {
  const errorMessage = await driver.findElement(By.id('error-message'));
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('Credenciais inválidas'); // Altere conforme a mensagem de erro exibida no seu sistema
  await driver.quit();
});
```

### 4. **Configurar o Arquivo de Execução (Runner)**
Para rodar os testes com o Cucumber, você precisa configurar o Cucumber com o arquivo `cucumber.js` para definir as configurações de execução. Crie o arquivo `cucumber.js` na raiz do projeto:

#### `cucumber.js`
```javascript
module.exports = {
  default: `--require features/steps/**/*.js --publish-quiet`
};
```

Esse arquivo indica onde estão os arquivos de steps e como o Cucumber deve executar os testes.

### 5. **Configurar o Selenium WebDriver**
O Selenium WebDriver precisa de um driver para interagir com o navegador. Como exemplo, vamos usar o Chrome.

#### Instalar o ChromeDriver
1. Baixe a versão compatível do [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads).
2. Coloque o `chromedriver` em um diretório do seu PATH ou forneça o caminho completo na inicialização do `Builder()`.

Você pode instalar o `chromedriver` via `npm` se preferir:

```bash
npm install chromedriver
```

E modificar o código para usar o `chromedriver`:

```javascript
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver'); // Adicione essa linha
```

### 6. **Rodando os Testes**
Para rodar os testes, use o seguinte comando:

```bash
npx cucumber-js
```

Isso fará o Cucumber procurar os arquivos `.feature` e os arquivos de steps, e executar os testes.

### Estrutura Final do Projeto
O seu projeto deve estar assim:

```
/seu-projeto
  /features
    /steps
      loginSteps.js
    login.feature
  cucumber.js
  package.json
  node_modules/
```

### Conclusão
Agora você tem um teste de login automatizado usando Cucumber e Selenium WebDriver em JavaScript! O Cucumber vai ler o arquivo `.feature`, executar as etapas definidas em `loginSteps.js`, e testar as funcionalidades de login na sua aplicação.

Se precisar de mais algum ajuste ou explicação, só avisar!