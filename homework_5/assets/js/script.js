var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);



//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

var hour = moment().hour();
//console.log(hour); //this does give back the correct hour
for (var i = 0; i < 9; i++){
    if (i < hour) {
        $("#9" + i).addClass("past")  //adding the class here to match the css to change color
    }
    else if (i === hour) {
        $("#9"+ i).addClass("present")
    }
    else {
        $("#9"+ i).addClass("future")
    }
}


var scheduleSave = $("textarea");

$("button").on("click", function(event){
    event.preventDefault();
    (scheduleSave + event).val();
    localStorage.setItem("scheduled" + event, scheduleSave);
})

// $(document).ready(function(){
//         saveButton = localStorage.getItem(i);
//         $(".textarea" + i).html(saveButton);
//     })

