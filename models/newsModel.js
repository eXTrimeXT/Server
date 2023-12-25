const connection = require("../mysql.js");

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
    console.log(arr);
    return arr;
};

exports.getOne = async function(req, res, idNews){
    let arr = [];
    let sql = "SELECT * FROM news WHERE idNews=?";
    console.log(req);
    filter=[req];
    await connection.query(sql, filter)
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