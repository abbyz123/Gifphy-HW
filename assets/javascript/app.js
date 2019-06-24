let keyWords = ["kitty", "puppy", "bird", "fish", "piggy"];
let gifLimit = 10;
let rating = "g";

function createButtons() {
    // create buttons
    $("#buttonsshow").empty();
    for (i = 0; i < keyWords.length; i++) {
        let newButton = $("<button>");
        newButton.attr("id", keyWords[i]);
        newButton.text(keyWords[i]);
        $("#buttonsshow").append(newButton);
    }
    $("#buttonsshow>*").each(function () {
        //$(this).unbind("click");
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
                    console.log(response.data[i]);
                    // fetch animate and still gif images
                    let imageURLAnimate = response.data[i].images.fixed_height.url;
                    let imageURLStill = response.data[i].images.fixed_height_still.url;
                    let gifImage = $("<img>");
                    gifImage.attr("src", imageURLStill);
                    gifImage.attr("data-still", imageURLStill);
                    gifImage.attr("data-animate", imageURLAnimate);
                    gifImage.attr("data-state", "still");
                    gifImage.attr("alt", buttonText);
                    gifImage.attr("class", "gif");
                    gifImage.addClass("marginTop10px marginRight10px");
                    // add event handler for each button
                    gifImage.on("click", function () {
                        console.log("gif clicked");
                        //console.log($(this));
                        let state = $(this).attr("data-state");
                        console.log(state);
                        if (state === "still") {
                            state = "animate";
                            let animateURL = $(this).attr("data-animate");
                            $(this).attr("src", animateURL);
                        } else {
                            state = "still";
                            let stillURL = $(this).attr("data-still");
                            $(this).attr("src", stillURL);
                        }
                        $(this).attr("data-state", state);
                    })
                    // append the gif to the main gif area
                    $("#main").append(gifImage);
                }
            });
        });
    })
}

// start of jquery
$(document).ready(function () {
    createButtons();
    $("#mainrow").addClass("marginTop10px");
    $("button[id='submit']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        let newKeyword = $("input[id='newKeyword']").val().trim();
        if (false === keyWords.includes(newKeyword, 0)) {
            keyWords.push(newKeyword);
        }
        createButtons();
    })
}); 
