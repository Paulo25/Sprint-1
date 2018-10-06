var mysql = require('mysql');

//metodo wapen -> embrulha a conexao fazendo com que a conexao sejá retornada por uma variável
var connMysql = function(){
	console.log("Conexao com o banco de dados foi estabelecida");
	 return mysql.createConnection({
		host : 'localhost',
		port : 3307,
		user : 'root',
		password : '',
		database : 'pharmarede'
 	});
}

module.exports = function(){
	console.log("O autoload carregou o módulo de conexão com bd");
	return connMysql;
 }