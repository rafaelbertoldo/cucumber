# Instalação do Cucumber.js

Esta seção detalha os passos necessários para configurar um ambiente de testes automatizados com o Cucumber.js e o Selenium WebDriver, utilizando o Node.js.

## 1. Inicializar um Projeto Node.js

> Precisamos ter o [node.js](node.md) instalado!!!

Para começar, crie um novo projeto Node.js ou inicie um projeto existente. Caso não tenha um projeto ainda, você pode inicializar um novo com o seguinte comando:

```bash
npm init -y
```

Este comando cria um arquivo `package.json` com as configurações padrão.

## 2. Instalar o Cucumber.js

O Cucumber-JS está disponível como um pacote `npm` e pode ser instalado como uma dependência de desenvolvimento no seu projeto. Para instalá-lo, execute o comando:

```bash
npm install --save-dev @cucumber/cucumber
```

Isso adicionará o pacote `@cucumber/cucumber` às dependências de desenvolvimento do seu projeto.

## 3. Instalar o Selenium WebDriver e o ChromeDriver

Para executar testes em navegadores, é necessário instalar o `selenium-webdriver` e o `chromedriver` como dependências de desenvolvimento. Execute os comandos abaixo:

```bash
npm install chromedriver selenium-webdriver --save-dev
```

O `selenium-webdriver` permite a automação de interações com o navegador, enquanto o `chromedriver` é o driver específico para o Chrome.

## 4. Instalar o Chai para Asserções

Para realizar asserções nos testes, é comum utilizar o Chai, que é uma biblioteca de asserções bastante utilizada em testes JavaScript. Instale o Chai com o seguinte comando:

```bash
npm install chai --save-dev
```

O Chai será útil para verificar os resultados esperados durante a execução dos testes.

## 5. Atualizar o Google Chrome

Para garantir que você tenha a versão mais recente do Google Chrome instalada, execute os seguintes comandos no seu terminal:

```bash
sudo apt update
sudo apt upgrade google-chrome-stable
```

Isso atualizará o Google Chrome para a versão mais recente, o que pode ser importante para a compatibilidade com o `chromedriver`.


Para as versões do NODE mais atualizadas, precisamos adicionar o `"type": "module",` no arquivo `package.json`.

```json
{
    "type": "module",
    "devDependencies": {
        "@cucumber/cucumber": "^11.2.0",
        "chai": "^5.1.2",
        "chromedriver": "^133.0.1",
        "selenium-webdriver": "^4.28.1"
    }
}
```

Essa alteração evitará o erro:

```bash
(node:63889) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/rfahham/projetos/cucumber/features/steps/loginSteps.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /home/rfahham/projetos/cucumber/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
```

---

## Próximos Passos: Automação com Cucumber.js

Agora que seu ambiente está configurado, você pode começar a automatizar testes usando o Cucumber. Para aprender como configurar e executar testes automatizados com Cucumber.js, veja a seção [Criando a Automação](automacao.md).