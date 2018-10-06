//criacao de rotas para renderizacao de paginas atrvés da url

module.exports = function(application){
application.get('/formulario_inclusao_fornecedor', function(req,res){
	res.render("admin/form_add_fornecedor", {validacao : {}, fornecedor : {}});
	});

application.post('/fornecedor/salvar', function(req,res){
	var fornecedor = req.body; //a propriedade body é preenchida pelo express todos os dados do request
	//funções assert com alguns complementos do express-validator
	req.assert('nome_fornecedor', 'Nome é obrigatório').notEmpty();
	req.assert('endereco_fornecedor', 'Endereco é obrigatório').notEmpty();
	req.assert('cnpj_fornecedor', 'CNPJ é obrigatório').notEmpty();

	var erros = req.validationErrors(); //função do express-validator confimando que houve um erro de validação
	//console.log(erros);// -> debug
	if(erros){ //se true
		res.render("admin/form_add_fornecedor", {validacao: erros, fornecedor: fornecedor});
		return;
	}

	//conexao
	var connection = application.config.dbConnection();
	//model
	var fornecedorModel = new application.app.models.FornecedoresDAO(connection);

	fornecedorModel.salvarFornecedor(fornecedor, function(error, result){
		res.redirect('/fornecedores');
	});


	});
};