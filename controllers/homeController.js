exports.getIndex = function(request, response){
    response.send(
        "<p><a href='http://localhost:3000/admin/articles'>Admin Articles</a></p>" + 
        "<p><a href='http://localhost:3000/admin/news'>Admin News</a></p>" + 
        "<p><a href='http://localhost:3000/article'>Article</a></p> " + 
        "<p><a href='http://localhost:3000/news'>News</a></p> "
    );
};