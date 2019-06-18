$("#search").on("click", function () {





    var queryURL = $.get("https://api.giphy.com/v1/gifs/search?api_key=EZPRe6jQskg48yfyY2aqEb1gGO76vosj&q=string&limit=25&offset=0&rating=G&lang=en");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)



    });

});