import http from "http";

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta HTTP
    res.setHeader('Content-Type', 'text/html');
    
    // Escreve uma mensagem na resposta HTTP
    res.write("<h1> Olá, mundo!</h1>");
  
    // Termina a resposta HTTP
    res.end();
  });

  // Define a porta em que o servidor vai escutar
const port = 8080;

// Inicia o servidor na porta especificada
server.listen(port, () => {
  console.log(`Servidor HTTP rodando na porta ${port}`);
});