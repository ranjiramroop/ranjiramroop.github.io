var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);


//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

var scheduleSave = $("textarea");

$("button").on("click", function(saving){
    saving.preventDefault();
    localStorage.setItem("scheduled" + i, scheduleSave);
})

$(document).ready(function(){
        saveButton = localStorage.getItem(i);
        $(".textarea" + i).html(saveButton);
    })
