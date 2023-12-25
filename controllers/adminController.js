const Models = require("../models/adminModel.js");

// Управление статьями
exports.getArticleAll = async function(req, res){
    let m = await Models.getAllArticle();
    res.render('adminArticles', {data:m});
};

exports.getArticle = async function(req, res){
    let m = await Models.getOneArticle(req.params.idArticle);
    res.render('adminArticleShow', {data:m});
};

exports.addArticle = async function(req, res){
    await Models.addOneArticle(req.body);
    let m = await Models.getAllArticle();
    res.render('adminArticles', {data:m});
};

exports.editArticle = async function(req, res){
    await Models.editOneArticle(req.body);
    let m = await Models.getOneArticle(req.body.idArticle);
    res.render('adminArticleShow', {data:m});
};

exports.deleteArticle = async function(req, res){
    await Models.deleteOneArticle(req.body.idArticle);
    let m = await Models.getAllArticle();
    res.render('adminArticles', {data:m});
};


// Управление новостями
exports.getNewsAll = async function(req, res){
    let m = await Models.getAllNews();
    res.render('adminArticles', {data:m});
};

exports.getNews = async function(req, res){
    let m = await Models.getOneNews(req.params.idNews);
    res.render('adminNewsShow', {data:m});
};

exports.addNews = async function(req, res){
    await Models.addOneNews(req.body);
    let m = await Models.getAllNews();
    res.render('adminNews', {data:m});
};

exports.editNews = async function(req, res){
    await Models.editOneArticle(req.body);
    let m = await Models.getOneArticle(req.body.idNews);
    res.render('adminNewsShow', {data:m});
};

exports.deleteNews = async function(req, res){
    await Models.deleteOneArticle(req.body.idNews);
    let m = await Models.getAllArticle();
    res.render('adminNews', {data:m});
};