Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "Admin" e a senha "admin123"
    Then o usuário deve ser redirecionado para a página Bem-Vindo