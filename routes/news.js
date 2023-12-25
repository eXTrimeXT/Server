let express = require('express');
const newsController = require("../controllers/newsController.js")
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
const jsonParser = express.json();

router.get('/', newsController.getAllNews);
router.get('/:idArticle', newsController.getOneNews);

console.log('route/news');

module.exports = router;