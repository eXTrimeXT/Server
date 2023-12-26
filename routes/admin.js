let express = require('express');
const adminController = require("../controllers/adminController.js")
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
const jsonParser = express.json();

// Контроллеры для админ панели
// Управление Статьями
router.get('/articles', adminController.getArticleAll);
router.get('/articles/:idArticle', adminController.getArticle);
router.post('/articles/addArticle', adminController.addArticle);
router.post('/articles/editArticle', adminController.editArticle);
router.post('/articles/deleteArticle', adminController.deleteArticle);

// Управление Статьями
router.get('/news', adminController.getNewsAll);
router.get('/news/:idNews', adminController.getNews);
router.post('/news/addNews', adminController.addNews);
router.post('/news/editNews', adminController.editNews);
router.post('/news/deleteNews', adminController.deleteNews);

console.log('route/admin');

module.exports = router;