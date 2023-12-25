let express = require('express');
const adminController = require("../controllers/adminController.js")
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});
const jsonParser = express.json();

// Контроллеры для админ панели
router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
<<<<<<< HEAD
router.post('/addArticle', adminController.addArticle);
router.post('/editArticle', adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);
=======
router.post('/:addArticle', adminController.addArticle);
router.post('/:editArticle', adminController.editArticle);
router.post('/:deleteArticle', adminController.deleteArticle);
>>>>>>> ee128d6845d19a6d62f785a45ffb4d3a37aaec28


console.log('route/admin');

module.exports = router;