//parte modelo do(MVC) que da acesso a os dados do banco através de atributos(entidades) armazenando query

//classe
function FornecedoresDAO(connection){
	//this._ do atribudo que indica que é de uma classe
	this._connection = connection; //atributo que recebe conexao
}

//propriedades da classe
FornecedoresDAO.prototype.getFornecedores = function(callback){
		this._connection.query('Select * from fornecedor', callback);
}
/*
NoticiasDAO.prototype.getNoticia  = function(callback){
		this._connection.query('Select * from noticias where id_noticia = 2', callback);
	}
*/

FornecedoresDAO.prototype.salvarFornecedor = function(fornecedor, callback){
		this._connection.query('Insert into fornecedor set ?',fornecedor, callback);
	}

module.exports = function(){
	return FornecedoresDAO;
}