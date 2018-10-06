//configuração de modulo de conexao express
var app = require('./config/server');

//configuração de modulo de rotas
//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app);


//criação do servidor com a porta que irá escutar as requisições, ultilizando função de callback
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});




