let express = require('express');
var app = express();
app.disable('view cache');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
app.use(express.static(__dirname + '/public')); // Для разрешения MIME типов
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // Для принятия данных формы
app.use(bodyParser.json()); 

let index = require('./routes/index');
app.use('/', index);

let article = require('./routes/article');
app.use('/article', article);

let news = require('./routes/news');
app.use('/news', news);

let admin = require('./routes/admin');
app.use('/admin', admin);

app.listen(3000);