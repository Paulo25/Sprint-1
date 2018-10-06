//var dbConnection = require('../../config/dbConnection');//conexao na variável


//criacao de rotas para renderizacao de paginas atrvés da url
module.exports = function(aplication){

aplication.get('/fornecedores', function(req,res){
	
	var connection = aplication.config.dbConnection(); //recupera a função de conexao com o banco
	var FornecedoresModel = new aplication.app.models.FornecedoresDAO(connection);

	 FornecedoresModel.getFornecedores(function(error, result){
		res.render("fornecedores/fornecedores", {fornecedores : result});
		//res.send(result);
		});
	});
};