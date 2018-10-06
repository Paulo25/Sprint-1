//criacao de rotas para renderizacao de paginas atrvés da url

module.exports = function(app){
app.get('/', function(req,res){
	res.render("home/index");
	});
}