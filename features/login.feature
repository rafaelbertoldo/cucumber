Feature: Teste de Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "1q2w3e4r"
    Then o usuário deve ser redirecionado para a página Bem-Vindo

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario@example.com" e a senha "senha_errada"
    Then o sistema deve exibir uma mensagem de erro de login