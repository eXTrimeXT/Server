let express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true})); // Для принятия данных формы
app.use(bodyParser.json()); 

let index = require('./routes/index');
app.use('/', index);

let article = require('./routes/article');
app.use('/article', article);

let admin = require('./routes/admin');
app.use('/admin', admin);

app.listen(3000);