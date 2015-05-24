//var apikey=121dea6cb6ea419be7902939b74c9fe0%3A10%3A72139813;	




	var nytapi="http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=India&api-key=121dea6cb6ea419be7902939b74c9fe0%3A10%3A72139813";
	$.getJSON(nytapi, function (json) {

	    for(i=0;i<9;i++){
	    var headline = json.response.docs[i].headline.main;
	    console.log('Headline : ', headline);
	    var category = json.response.docs[i].section_name;
	    console.log('Category : ',category);
	    var weburl = json.response.docs[i].web_url;
	    console.log('weburl : ',weburl);

	   	var img;
	    if($.isEmptyObject(json.response.docs[i].multimedia))
	    {
	    	img="img/portfolio/1.jpg";
	    }
	    else{
	    	 var imgfetch=json.response.docs[i].multimedia[0].url;
	    	 console.log(imgfetch); 
	    	 var starturl="http://www.nytimes.com/";
	    	 var img=starturl+imgfetch;
	    	 console.log(img);
	    }/*
	    $('div.project-category').text(category);
	    $('div.project-name').text(headline);
	    */

	    

	    var newscontainer='<div class="col-lg-4 col-sm-6">\
			                    <a href="'+weburl+'" class="portfolio-box">\
			                    <img src="'+img+'" class="img-responsive" alt="" style="width:200px;height:120px">\
			                        <div class="portfolio-box-caption">\
			                            <div class="portfolio-box-caption-content">\
			                                <div class="project-category text-faded">\
			                                    '+category+'\
			                                </div>\
			                                <div class="project-name">\
			                                    '+headline+'\
			                                </div>\
			                            </div>\
			                        </div>\
			                    </a>\
			                </div>';
		$("section#portfolio").append(newscontainer);
		}
	});
  
