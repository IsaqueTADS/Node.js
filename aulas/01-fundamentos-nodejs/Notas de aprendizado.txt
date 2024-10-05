import http from "node:http"; // modulo do http importado
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

// UUIS => Universal Unique ID

// Parei na aula: F018

const server = http.createServer(async (req, res) => {
  // resquest => req && response => res

  const { method, url } = req; //uso da desestruturação

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});
server.listen(3333); //Indica que o servidor está ouvindo a porta 3333

// node --watch src/server.js : serve para dar restart no servidor

/*

  ROTAS: meios de entradas de executar diversas operaçãos dentro do backend

  - Criar usuários
  - Listagem de usuários
  - Edição de usuários
  - Remoção de usuários


  -Requisição HTTP{
   -Mŕtodo HTTP
   -URL
  }

   GET, POST, PUT, PATCH, DELETE

   diferença semântica

   GET => Buscar informção do Back-End

   POST => Criar uma informção, um rescurso no back-end

   PUT => Atualizar um recurso no back-end

   PATCH => Atualizar uma nformção especifica de um recurso no back-end

   DELETE => Deletar um recurso do back-end

   EXEMPLOS:

   GET /users => estou buscando um usuario no back-end

   POST /users => Criar um usuário no back-end


   AULA F005 -memorias

   Stateful != Stateless[]

   Stateful - gurada na memoria, e perde ao ser encerrado o servidor

   JSON - Java script Object Notationequisição/resposta) => Metadados
=======================================================================

   HTTP Status Code

  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status




*/
