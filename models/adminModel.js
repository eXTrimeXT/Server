const { fileLoader } = require("ejs");
const connection = require("../mysql.js");
const { response } = require("express");


exports.getAll = async function getA(req, res){
    let arr = [];
    console.log("adminModel getAll");
    await connection.query("SELECT * FROM article")
    .then(data => {
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
            console.log(i + " : " + arr[i]);
        }
    })
    .catch(err => {
        console.log(err);
    });
    return arr;
}

exports.getOne = async function get(req, res){
    let arr = [];
    let sql = "SELECT * FROM article WHERE idArticle=?";
    filter = [req];
    console.log("adminModel getOne: " + req);
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

<<<<<<< HEAD
exports.addOne = async function add(req, res){
    let sql = "INSERT INTO article VALUES ('', ?, ?, ?)";
    console.log("adminModel addOne: " + req.idArticle + " : "+ req.titleArticle + " : " + req.textArticle + " : " + req.description);
=======
exports.addOne = async function(req, res){
    let sql = "INSERT INTO article VALUES ('',?, ?, ?)";
    console.log("АААААААААААААААААААААА: " + req.idArticle + " : " + req.titleArticle + " : " + req.textArticle + " : " + req.description);
>>>>>>> ee128d6845d19a6d62f785a45ffb4d3a37aaec28
    filter = [req.titleArticle, req.textArticle, req.description];
    console.log("adminModel addOne: " + req.titleArticle)
    await connection.query(sql, filter)
    .then(data =>{  
    })
    .catch(err =>{
        console.log(err);
    });
}

exports.editOne = async function edit(req, res){
    let arr = [];
    let sql = "UPDATE article SET titleArticle=?, textArticle=?, descriptionArticle=? WHERE idArticle=?";
    filter = [req.titleArticle, req.textArticle, req.description, req.idArticle];
    console.log("admindModel editOne: req.description = " + req.description);
    await connection.query(sql, filter)
    .then(data =>{
        for (let i = 0; i < data[0].length; i++) {
            arr[i] = data[0][i];
        }
        console.log("editOne adminModel.js");
    })
    .catch(err => {
        console.log("ERROR: " + err);
    });
    return arr;
}

exports.deleteOne = async function del(req, res){
    console.log("adminModel deleteOne");
    console.log("adminModel: req = " + req);
    // let sql = "DELETE FROM article WHERE idArticle=?";
    filter = [req];
    // await connection.query(sql, filter)
    await connection.query(`DELETE FROM article WHERE idArticle=${req}`)
    .then(response => {
        console.log("OK");
    });
    console.log("adminModel deleteOne");
}