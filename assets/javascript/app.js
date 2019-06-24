let keyWords = ["kitty", "puppy", "bird", "fish", "piggy"];
let gifLimit = 10;
let rating = "g";

// start of jquery
$(document).ready(function () {
    // create buttons
    for (i = 0; i < keyWords.length; i++) {
        $("#buttonsshow").append('<button id="' + keyWords[i] + '">' + keyWords[i] + '</button>');
    }
    $("#buttonsshow>*").each(function () {
        $(this).css('margin-right', '10px');
    })
    $("#buttonsshow>*").each(function () {
        $(this).on('click', function () {
            let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + $(this).text() + "&limit=" + gifLimit + "&rating=" + rating;
            let buttonText = $(this).text();
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                $("#main").empty();
                for (i = 0; i < response.data.length; i++) {
                    let imageURL = response.data[i].images.fixed_height.url;
                    let gifImage = $("<img>");
                    gifImage.attr("src", imageURL);
                    gifImage.attr("alt", buttonText);
                    $("#main").append(gifImage);
                }
            });
        });
    })
}); 
