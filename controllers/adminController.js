const Models = require("../models/adminModel.js");

exports.getArticleAll = async function getA2(req, res){
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
};

exports.getArticle = async function get2(req, res){
    let m = await Models.getOne(req.params.idArticle);
    console.log("adminController: getArticle");
    res.render('adminArticleShow', {data:m});
};

exports.addArticle = async function add2(req, res){
    await Models.addOne(req.body);
    let m = await Models.getAll();
    console.log("adminController: addArticle");
    res.render('adminArticles', {data:m});
};

exports.editArticle = async function edit2(req, res){
    await Models.editOne(req.body);
    let m = await Models.getOne(req.body.idArticle);
    console.log("adminController: editArticle");
    res.render('adminArticleShow', {data:m});
};

exports.deleteArticle = async function del2(req, res){
    await Models.deleteOne(req.body.idArticle);
    let m = await Models.getAll();
    console.log("adminController deleteArticle");
    res.render('adminArticles', {data:m});
};