var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);

//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

var hour = moment().hour();
// var id = "#9, #10, #11, #12, #13, #14, #15, #16, #17";
// console.log(hour); //this gives back the correct hour
for (var i = 9; i < 18; i++) { //Start at 9 because my id for 9am starts at 9 and I use that number as the starting point to calculate the later times.
    console.log(i); //makes sure that all the hours are getting called through i
 
    if (i < hour) {
        $("#" + i).addClass("past")  //adding the class here to match the css classes to change color according to time
    }
    else if (i === hour) {
        $("#" + i).addClass("present") 
    }
    else {
        $("#" + i).addClass("future")
    }
}

$("button").on("click", function(event){
    event.preventDefault();
    var id = $(this).attr("id") //using the id of the button when it is clicked
    id = id.substring(0,id.length-1);  //converting the button id to the text id by dropping the extra letter on the id. 
    var text = $("#"+id).val(); //when the save button is clicked, the new variable text will save the value
    localStorage.setItem(id, text); // saving value to local storage with the key of id and value of text
})

$(document).ready(function(){
    for (i = 9; i < 18; i++) {
        var getText = localStorage.getItem(i); //getting the stored text from local storage
        $("#"+i).html(getText); // populate with .html using the text from local storage
    }
})