Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "Admin" e a senha "admin123"
    Then o usuário deve ser redirecionado para a página Bem-Vindo

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "senha_errada"
    Then o sistema deve exibir uma mensagem de erro de login
  
  Scenario: Tentar acessar a página sem as credenciais
    Given que o usuário está na página de login
    When o usuário não insere o nome de usuário e senha
    Then o sistema deve exibir uma mensagem de erro informando que os dados são obrigatórios

