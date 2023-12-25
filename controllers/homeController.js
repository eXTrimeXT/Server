exports.getIndex = function(request, response){
    response.send("<p><a href='http://localhost:3000/admin'>admin</a></p> <p><a href='http://localhost:3000/article'>article</a></p>");
};