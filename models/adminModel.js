const { fileLoader } = require("ejs");
const connection = require("../mysql.js");
const { response } = require("express");

// Логика управления статьями
exports.getAllArticle = async function(req, res){
    let arr = [];
    await connection.query("SELECT * FROM article")
    .then(data => {
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err);
    });
    return arr;
}

exports.getOneArticle = async function(req, res){
    let arr = [];
    let sql = "SELECT * FROM article WHERE idArticle=?";
    filter = [req];
    await connection.query(sql, filter)
    .then(data => {
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err=> {
        console.log(err);
    });
    return arr;
}

exports.addOneArticle = async function(req, res){
    let sql = "INSERT INTO article VALUES ('', ?, ?, ?)";
    filter = [req.titleArticle, req.textArticle, req.descriptionArticle];
    await connection.query(sql, filter)
    .then(data =>{  
    })
    .catch(err =>{
        console.log(err);
    });
}

exports.editOneArticle = async function(req, res){
    let arr = [];
    let sql = "UPDATE article SET titleArticle=?, textArticle=?, descriptionArticle=? WHERE idArticle=?";
    filter = [req.titleArticle, req.textArticle, req.descriptionArticle, req.idArticle];
    await connection.query(sql, filter)
    .then(data =>{
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log("ERROR: " + err);
    });
    return arr;
}

exports.deleteOneArticle = async function(req, res){
    let sql = "DELETE FROM article WHERE idArticle=?";
    filter = [req];
    await connection.query(sql, filter)
    .then(response => {
        console.log("OK");
    });
}


// Логика управления новостями
exports.getAllNews = async function(req, res){
    let arr = [];
    await connection.query("SELECT * FROM news")
    .then(data => {
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err);
    });
    return arr;
}

exports.getOneNews = async function(req, res){
    let arr = [];
    let sql = "SELECT * FROM news WHERE idNews=?";
    filter = [req];
    await connection.query(sql, filter)
    .then(data => {
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err=> {
        console.log(err);
    });
    return arr;
}

exports.addOneNews = async function(req, res){
    let sql = "INSERT INTO news VALUES ('', ?, ?, ?)";
    filter = [req.titleNews, req.textNews, req.descriptionNews];
    await connection.query(sql, filter)
    .then(data =>{  
    })
    .catch(err =>{
        console.log(err);
    });
}

exports.editOneNews = async function(req, res){
    let arr = [];
    let sql = "UPDATE news SET titleNews=?, textNews=?, descriptionNews=? WHERE idNews=?";
    filter = [req.titleNews, req.textNews, req.descriptionNews, req.idNews];
    await connection.query(sql, filter)
    .then(data =>{
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log("ERROR: " + err);
    });
    return arr;
}

exports.deleteOneNews = async function(req, res){
    let sql = "DELETE FROM news WHERE idNews=?";
    filter = [req];
    await connection.query(sql, filter)
    .then(response => {
        console.log("OK");
    });
}