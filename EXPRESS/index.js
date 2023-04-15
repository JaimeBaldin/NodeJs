import Express from "express";

const app = Express();



app.get('/', function(req, res) {
    res.send('Olá, mundo!');
  });

  app.get('/sobre', function(req, res) {
    res.send('Conhencendo um pouco mais');
  });

app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor rodando")
    }
})



