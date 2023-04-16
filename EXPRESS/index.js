import Express from "express";

const app = Express();



  app.get('/', function(req, res) {
    res.send('Olá, mundo!');
  });

  app.get('/sobre/:empresa?', function(req, res) {
    var empresa = req.params.empresa;

    if(empresa){
      res.send("A empresa é " + empresa);
    }else{
      res.send("A empresa é o nosso...");
    }

  });

  app.get('/ola/:nome', function(req, res) {
    res.send("Oi " + req.params.nome);
  });


app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor rodando")
    }
})



