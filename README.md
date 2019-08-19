# Desafio Beleaf

Aplicação web para visualização e gerenciamento de Marmitas.

O Frontend foi construído em reactjs com redux.
Está disponível no endereço: https://filipebotelho-desafio-beleaf.herokuapp.com/

O acesso ao usuario administrador pode ser feito pelo usuário "admin" e senha "admin". Mas podem ser criados novos usuários.

Os arquivos desse projeto é compilado diretamente na pasta "public" dentro da pasta "backend" que está disponível no repositório: https://github.com/filipedesousab/backend-desafio-beleaf

## Tecnologias utilizadas

- ReactJS (e seu ecossistema)
- SASS (para estilo)
- Storybook (para teste visual dos componentes da interface)
- ESLint (para manter o código organizado)
- Template AdminLTE componentizado com ReactJS por mim disponível em: https://github.com/filipedesousab/adminlte-with-react-and-redux

## Funcionalidades ainda a serem desenvolvida
- Paginação da lista de marmitas
- Ordeneçã da lista de marmitas

## Melhorias a serem desenvolvidas no frontend
- Melhorar a máscara de dinheiro
- Telas para gestão de usuários
- Design mais indicado aos usuários não administradores

## Instalação

O frontend pode ser executado no modo de desenvolvimento, mas precisa do servidor local iniciado na porta 8080. Caso haja necessidade de alterar a porta do servidor, a configuração para o frontend poderá ser feita no arquivo "webpack.config.js" na linha 42.
Caso deseje compilar os arquivos do frontend, os arquivos serão compilados diretamente na pasta "public" do backend. O frontend deve ser instalado em uma pasta pararela ao pasta do backend.

Exemplo:

Pasta do Projeto\
|_ backend (pasta do outro repositório)\
|_ frontend (pasta deste repositório)

- Criar pasta para todo o projeto (Ou entrar na pasta já criada)
- Clonar repositório
- Renomear pasta do repositório para "frontend"
- Entrar na pasta frontend e instalar dependenciar com "yarn" ou "npm install"

## Configurações
As configurações para o modo de desenvolvimento deverão ser feitas no arquivo "webpack.config.js".
As configurações para o modo de produção (compilar) deverão ser feitas no arquivo "webpack.prod.config.js".

- A porta do servidor de desenvolvimento pode ser alterada na linha 23 do arquivo "webpack.config.js".
- A porta e endereço do backend de desenvolvimento pode ser alterada na linha 42 do arquivo "webpack.config.js".
- O endereço do backend de produção poderá ser alterado, caso necessário, na linha 36 do arquivo "webpack.prod.config.js".
- Outras configurações estão comentadas nos arquivos.

## Execução
- Entrar na pasta do frontend
- Para servidor de desenvolvimento executar "yarn start" ou "npm run start"
- Para compilar os arquivos executar "yarn build" ou "npm run build"
- Acessar o servidor de desenvolvimento na porta 3000 (localhost:3000)
