# RSVP - PLUS

 O RSVP - PLUS agiliza a parte de confirmação da presença dos convidados em seu evento;

 Cada convite contem um cógigo que deve ser informado assim que o usuário acessar a página,
 aopós informar o código, o sistema irá fazer uma consulta na base para saber se o código é válido e se ainda não foi usado.
 Após a confirmação, o usuário será direcionado para uma outra página, onde ele deve informar o nome e a quantidade de pessoas, ex. um adulto e duas crianças.
 após a confirmação, os dados serão salvos na base.

 O Administrador do evento pode se logar e verificar quais convites já foram confirmados, quantidade de pessoas e etc.

 ## ROTAS

  - Tela inicial: http://localhost:3000/ (inserir o código);
  - Tela de confirmação: http://localhost:3000/confirmacao (Se o código for válido e ainda estiver ativo o usuário será direcionado para a mesma)

  - tela de Adm: http://localhost:3000/adm (Tela de Login)
  - Área logada: http://localhost:3000/adm/area-logada (após a autenticação do usuário)
        - Lista de convites;
        - Convites ativos;
        - Convidados confirmados