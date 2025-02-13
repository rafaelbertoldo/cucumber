# CUCUMBER

https://cucumber.io/

O Cucumber  permite que você escreva testes automatizados em linguagem simples

https://cucumber.io/docs

## Introdução

Cucumber é uma ferramenta que dá suporte ao Behaviour-Driven Development (BDD) . Se você é novo no Behaviour-Driven Development, leia nossa introdução ao BDD primeiro.

## O que é Cucumber 

Ok, agora que você sabe que o BDD é sobre descoberta, colaboração e exemplos (e não testes), vamos dar uma olhada no Cucumber.

O Cucumber lê especificações executáveis ​​escritas em texto simples e valida se o software faz o que essas especificações dizem. As especificações consistem em múltiplos exemplos , ou cenários . Por exemplo:

```yaml
Scenario: Breaker guesses a word
  Given the Maker has chosen a word
  When the Breaker makes a guess
  Then the Maker is asked to score
```

Cada cenário é uma lista de etapas para o Cucumber trabalhar. 

O Cucumber verifica se o software está em conformidade com a especificação e gera um relatório indicando ✅ sucesso ou ❌ falha para cada cenário.

Para que o Cucumber entenda os cenários, ele deve seguir algumas regras básicas de sintaxe, chamadas `Gherkin`.

## O que é Gherkin

Gherkin é um conjunto de regras gramaticais que torna o texto simples estruturado o suficiente para o Cucumber entender. O cenário acima é escrito em Gherkin.

O Cucumber serve a vários propósitos:

- Especificação executável inequívoca
- Testes automatizados usando Cucumber
- Documentar como o sistema realmente se comporta

## O que são definições de etapas 

As definições de etapas conectam as etapas do Gherkin ao código de programação. 
Uma definição de etapa realiza a ação que deve ser realizada pela etapa. 
Então, as definições de etapas conectam a especificação à implementação.

`Steps in Gherkin` -> matched with -> `Step Definitions` -> manipulates -> `System`


Definições de etapas podem ser escritas em muitas linguagens de programação. Aqui está um exemplo usando JavaScript:

```javascript
When('{maker} starts a game', maker => {
  maker.startGameWithWord({ word: 'whale' })
})
```

[Próximo passo... Instalação](./docs/install.md)