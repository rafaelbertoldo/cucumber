# BDD

**BDD** (Behavior Driven Development) é uma prática de desenvolvimento de software que busca melhorar a colaboração entre desenvolvedores, testadores e stakeholders (como analistas de negócios ou clientes), por meio de uma linguagem comum e acessível a todos. A ideia central do BDD é que o comportamento esperado do sistema seja claramente descrito em termos de exemplos, o que facilita o entendimento e a validação das funcionalidades.

### Características do BDD:

1. **Foco no comportamento do sistema**:
   Em vez de focar em especificações técnicas ou código, o BDD concentra-se no comportamento do sistema do ponto de vista do usuário. Ou seja, define o que o sistema deve fazer, e não como ele faz.

2. **Uso de uma linguagem acessível a todos**:
   O BDD utiliza uma linguagem comum, muitas vezes em inglês simplificado, para que todos os envolvidos no processo de desenvolvimento, incluindo não-técnicos, possam entender e contribuir para as especificações.

3. **Exemplos concretos**:
   No BDD, as funcionalidades são descritas por meio de **exemplos** ou **cenários** que ilustram como o sistema deve se comportar em diferentes situações. Esses exemplos são detalhados em termos de entradas, ações e saídas esperadas.

### Componentes principais do BDD:

1. **Feature** (Funcionalidade):
   Uma **feature** é uma parte do comportamento do sistema que você está desenvolvendo. Ela é descrita de forma geral, mas com exemplos práticos que a explicam.

2. **Cenários** (Scenarios):
   Dentro de uma **feature**, você define **cenários** que exemplificam como a funcionalidade deve se comportar. Os cenários são compostos por **Given**, **When**, **Then**, que representam o contexto, a ação e o resultado esperado.

3. **Passos** (Steps):
   Cada cenário é dividido em etapas ou **passos**, que descrevem ações ou verificações que ocorrem durante a execução do teste. Esses passos são escritos em uma linguagem de domínio específico (como Gherkin) e podem ser automaticamente convertidos em código que será executado.

### A estrutura típica de um cenário BDD (em Gherkin):

- **Given**: O contexto inicial, onde o sistema está em um estado específico.
- **When**: A ação que o usuário ou sistema executa.
- **Then**: O resultado esperado após a ação ser realizada.

#### Exemplo de um cenário em Gherkin:

```gherkin
Feature: Login de usuário
  
  Rule: O usuário só poderá acessar a página inicial se o login for bem-sucedido

    Scenario: Login com credenciais válidas
      Given que o usuário está na página de login
      When o usuário insere o nome de usuário "usuario@example.com" e a senha "senha123"
      Then o usuário deve ser redirecionado para a página de boas-vindas
```

### Benefícios do BDD:

1. **Comunicação melhorada**:
   O BDD ajuda a melhorar a comunicação entre desenvolvedores, testadores e stakeholders. Todos têm um entendimento comum sobre como o sistema deve se comportar, reduzindo mal-entendidos e erros de interpretação.

2. **Facilidade de manutenção**:
   Como os cenários são descritos de forma clara e simples, torna-se mais fácil manter e atualizar os testes à medida que o sistema evolui.

3. **Testes automatizados e documentação viva**:
   Os cenários BDD podem ser automaticamente convertidos em testes, criando uma documentação viva do sistema. Isso garante que os testes sejam executados conforme os requisitos descritos e a documentação sempre esteja atualizada.

4. **Testes mais claros e específicos**:
   A descrição de cenários em uma linguagem acessível ajuda a evitar ambiguidades nos testes, tornando-os mais claros e específicos.

### Ferramentas comuns para BDD:

1. **Cucumber**:
   O Cucumber é uma das ferramentas mais populares para implementar BDD. Ele permite que os testes sejam escritos em Gherkin e então automatizados em várias linguagens de programação (como Java, JavaScript, Ruby, etc.).

2. **JBehave**:
   JBehave é uma ferramenta para Java que também facilita o desenvolvimento orientado a comportamento, permitindo que os cenários sejam escritos em uma linguagem natural.

3. **SpecFlow**:
   SpecFlow é a versão do Cucumber para o .NET, permitindo a automação de testes BDD em ambientes Microsoft.

4. **Behat**:
   Behat é uma ferramenta para PHP que facilita a implementação de BDD em aplicativos PHP.

### Conclusão:
O BDD é uma prática poderosa que melhora a colaboração entre os diferentes membros de uma equipe de desenvolvimento, ajuda a garantir que o sistema esteja alinhado com as expectativas dos stakeholders e gera testes automatizados que funcionam como uma documentação viva e clara. A principal vantagem do BDD é a simplicidade e a clareza na forma como o comportamento do sistema é descrito e validado.

[< VOLTAR](../README.md)