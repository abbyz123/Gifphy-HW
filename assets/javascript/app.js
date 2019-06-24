let keyWords = ["kitty", "puppy", "bird", "fish", "piggy"];

// start of jquery
$(document).ready(function() {
    // create buttons
    for (i = 0; i < keyWords.length; i++) {
        $("#buttonsshow").append('<button id="' + keyWords[i] + '">' + keyWords[i] + '</button>');
    }
    $("#buttonsshow>*").each(function(){
        $(this).css('margin-right','10px');
    })
}); 
