//riquere serve para incluir um modulo no codigo javascript
var express = require('express'); //recupera a biblioteca do express
var consign = require('consign'); //modulo que faz o auto load de qual quer pasta
var bodyParser = require('body-parser');//modulo que faz a captura de dados submetidos
var expressValidator =  require('express-validator');


var app = express(); //executa a função que o modo do express retorna
app.set('view engine', 'ejs'); //define o ejs como o motor de geração de viwes com arquivos.ejs
app.set('views', './app/views');//define onde está o novo caminho de views

//medwhere = modulo que vai atuar entre requições e resposta
app.use(bodyParser.urlencoded({extended: true})); //includo bodyparser dentro do server express app.js
app.use(expressValidator());//includo expressValidator dentro do server express app.js




//(scaneando) inclui todas as pasta de rotas dentro do app para subir com o servidor
consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);


module.exports = app; //module.exports informa o que deve ser exportado