import { Given, When, Then } from '@cucumber/cucumber';
import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import('chromedriver');

let driver;

Given('que o usuário está na página de login', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://horadoqa.github.io/login/');  // URL da página de login
});

When('o usuário insere o nome de usuário {string} e a senha {string}', async function (username, password) {
  const usernameField = await driver.findElement(By.id('username'));  // Campo de usuário
  const passwordField = await driver.findElement(By.id('password'));  // Campo de senha
  const loginButton = await driver.findElement(By.xpath("//button[contains(text(),'Entrar')]"));  // Botão de login, sem ID

  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  await loginButton.click();  // Clicando no botão de login
});

Then('o usuário deve ser redirecionado para a página inicial', async function () {
  await driver.wait(until.urlIs('https://horadoqa.github.io/welcome/index.html'), 5000);  // A URL após o login bem-sucedido
  const currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).to.equal('https://horadoqa.github.io/welcome/index.html');  // Verificando se a URL está correta
  await driver.quit();
});

Then('o sistema deve exibir uma mensagem de erro de login', async function () {
  const errorMessage = await driver.findElement(By.id('error-message'));  // Pegando a mensagem de erro
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('E-mail ou senha inválidos!');  // Verificando a mensagem de erro
  await driver.quit();
});
