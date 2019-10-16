
// Buttons to render
var topics = ["video games", "books", "music", "computer code"];


// search for gifs
function displayGifs() {
    
    $("#gifs-view").empty();
    
    var gifSearch = $(this).attr("data-name");
    

    var queryURL = ("https://api.giphy.com/v1/gifs/search?api_key=EZPRe6jQskg48yfyY2aqEb1gGO76vosj&q=" + gifSearch + "&limit=10&offset=0&rating=G&lang=en");

    console.log(gifSearch);

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {
        // console.log("Response",response)
        // console.log("URL Q", queryURL)
        var results = response.data;
        // console.log("Results", results);

        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            var gifs = $('<img class="w-100">');
            gifs.attr("src", results[i].images.downsized_medium.url);
            $("#gifs-view").append(gifs);
        }
    });
}
// render buttons and display
function renderButtons() {
    // clear the div
    $("#buttons-area").empty();
    // loop array
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button class='btn btn-primary'>");
        b.addClass("gifs");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $('#buttons-area').append(b);

    }

}
// This function adds a button
$("#gif-search").on("click", function (event) {
    event.preventDefault();
    var gifSearch = $("#search").val().trim();
    $("#search").val("");
    console.log("Results", gifSearch);
    topics.push(gifSearch);
    renderButtons();
    
    
    // Calling renderButtons which handles the processing of our movie array
    
});
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".gifs", displayGifs);

// Calling the renderButtons function to display the intial buttons
renderButtons();

