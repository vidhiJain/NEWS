$.ajax({
    url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=India&sort=newest&api-key=121dea6cb6ea419be7902939b74c9fe0%3A10%3A72139813",
    dataType: 'json',
    success: function(results){
        console.log(results);
    }
});