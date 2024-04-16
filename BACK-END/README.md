## Comandos Sequelize

- Criar a Model Concidados:  npx sequelize-cli model:generate --name Convidados --attributes nome:string,acompanhanteAdulto:number,acompanhanteCrianca:number,codconvite:string 

- Criar a Model Usuários: npx sequelize-cli model:generate --name Usuarios --attributes nome:string,email:string,senha:string

- Criar as tabelas na base: npx sequelize-cli db:migrate

- Gerar dados para popular na base:  npx sequelize-cli seed:generate --name demo-convidados

- Gerar dados para popular na base:  npx sequelize-cli seed:generate --name demo-convite

- Gerar dados para popular na base:  npx sequelize-cli seed:generate --name demo-usuarios

- Popular os dados na base: npx sequelize-cli db:seed:all
