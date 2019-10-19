var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);



//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

for (var i = 0; i < 9; i++){
    var hour = moment().hour();
    if (i < hour) {
        addAttr(".past")
    }
}

//--------------

// var scheduleSave = $("textarea");

// $("button").on("click", function(saving){
//     saving.preventDefault();
//     localStorage.setItem("scheduled" + i, scheduleSave);
// })

// $(document).ready(function(){
//         saveButton = localStorage.getItem(i);
//         $(".textarea" + i).html(saveButton);
//     })

var randomDate = "02/12/2019";
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, randomFormat);

    // Using scripts from moment.js write code below to complete each of the following.

    // Console.log to confirm the code changes you made worked.

    // 1 Convert the convertedDate into TWO other date formats
    console.log(convertedDate.format("MM/DD/YY"));
    console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
    console.log("----------------------------------------");

    // 2 ...to determine the time in days between today and the convertedDate
    console.log(convertedDate.diff(moment(), "days"));
    console.log("----------------------------------------");

    // 3 ...to determine the number of days between the convertedDate and 02/14/2001
    var newDate = moment("04/04/1998", randomFormat);
    console.log(convertedDate.diff(newDate, "days"));

    // 4 ...to convert the convertedDate to unix time (be sure to look up what unix time is)
    console.log(convertedDate.format("X"));
    console.log("----------------------------------------");

    // 5 ...to determine what day of the week is convertedDate.
    console.log(convertedDate.format("dddd"));