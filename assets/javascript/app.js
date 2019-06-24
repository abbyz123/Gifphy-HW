let keyWords = ["kitty", "puppy", "bird", "fish", "piggy"];

// start of jquery
$(document).ready(function() {
    // create buttons
    for (i = 0; i < keyWords.length; i++) {
        console.log("add something");
        addStr = '<button id="' + keyWords[i] + '">' + keyWords[i] + '</button>';
        console.log(addStr);
        $("#buttonsshow").append('<button id="' + keyWords[i] + '">' + keyWords[i] + '</button>');
    }
}); 