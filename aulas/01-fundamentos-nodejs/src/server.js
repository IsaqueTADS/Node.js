import http from "node:http"; // modulo do http importado

const server = http.createServer((request, response) => {
  // resquest => req && response => res

  return response.end("Hello World");
});

server.listen(3333); //Indica que o servidor está ouvindo a porta 3333
