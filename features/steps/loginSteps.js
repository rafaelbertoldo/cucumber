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
  const loginButton = await driver.findElement(By.id('button'));

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