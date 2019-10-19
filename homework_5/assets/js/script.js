var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);



//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

var hour = moment().hour();
//console.log(hour); //this does give back the correct hour
for (var i = 0; i < 9; i++){
    if (i < hour) {
        $("#9" + i).addClass("past")  //adding the class here to match the css classes to change color according to time
    }
    else if (i === hour) {
        $("#9"+ i).addClass("present")
    }
    else {
        $("#9"+ i).addClass("future")
    }
}

$("button").on("click", function(event){
    event.preventDefault();
    var saveEvent = $("textarea" + saveEvent).val();  //when the save button is clicked, the textarea will save the value
    localStorage.setItem("scheduled" + event, saveEvent); // value saved to local storage
})

$(document).ready(function(){
    for (i = 0; i < 9; i++) {
        var recallSaveEvent = localStorage.getItem("scheduled" + i);
        $("textarea" + i).html(recallSaveEvent); // trying to populate the text area with the local storage
    }
    })


