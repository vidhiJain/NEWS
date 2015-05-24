// The Google Geocoding API url used to get the JSON data
var geocodingAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=India&sort=newest&api-key=121dea6cb6ea419be7902939b74c9fe0%3A10%3A72139813";

$.getJSON(geocodingAPI, function (json) {

    // Set the variables from the results array
    for(i=0;i<10;i++){
    var headline = json.response.docs[i].headline.main;
    console.log('headline : ', headline);
    var category = json.response.docs[i].section_name;
    console.log('Category : ',category);
    }

    // Set the table td text
    $('#headline').text(headline);
    $('#category').text(category);
   
});

// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: geocodingAPI,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});