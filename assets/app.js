$(document).ready(function () {
    // Buttons to render
    var topics = ["video games", "books", "music", "computer code"];


    function renderButtons() {

        $("#buttons").empty();

        for (var i = 0; i < topics.length; i++) {
            var bttn = $("<button>" + topics[i] + "</button>");
            bttn.addClass("games");
            bttn.attr("data-name", topics[i]);
            bttn.text(topics[i]);
            $('#buttons').append(bttn);

        }

    };
    renderButtons()
    // search for gifs
    $("#buttons").on("click", ".games", function () {

        // var gifSearch = $('#search').val()
       var gifSearch = $(this).attr("data-name");

        var queryURL = (`https://api.giphy.com/v1/gifs/search?api_key=EZPRe6jQskg48yfyY2aqEb1gGO76vosj&q=${gifSearch}&limit=10&offset=0&rating=G&lang=en`);

        console.log(gifSearch)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                console.log(results)
                var gifs = $('<img>');
                gifs.attr("src", results[i].images.fixed_height.url);
                $("#gifs").append(gifs);
            }
        })

    });
});