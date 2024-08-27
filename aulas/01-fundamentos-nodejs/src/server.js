import http from "node:http"; // modulo do http importado

// Parei na aula:   f004:


const users = []

const server = http.createServer((request, response) => {
  // resquest => req && response => res

  const { method, url } = request; //uso da desestruturação

  console.log(method, url);

  if (method === "GET" && url === "/users") {
    //Early return
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: 'IsaqueTADS',
      email: 'isaquetads@example.com',
    });
    return response.end("Criação de usuários");
  }

  return response.end("Hello Wordl, My goddd");
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

   JSON - JAva script Object Notationequisição/resposta) => Metadados

*/
