var now = moment().format('MMMM Do YYYY, h:mm a');
// console.log (moment());
$('#currentDay').html(now);



//every time user clicks the save button, it should build an array from 9am-5p
//there should be 9 items in the array

var hour = moment().hour();
var id = "#9, #10, #11, #12, #13, #14, #15, #16, #17";
//console.log(hour); //this gives back the correct hour
for (var i = 9; i < 17; i++){
    if (i < hour) {
        $([id] + i).addClass("past")  //adding the class here to match the css classes to change color according to time
    }
    else if (i === hour) {
        $([id] + i).addClass("present")
    }
    else {
        $([id] + i).addClass("future")
    }
}

$("button").on("click", function(event){
    event.preventDefault();
    var textEvent = $("textarea" + textEvent).val();  //when the save button is clicked, the textarea will save the value
    localStorage.setItem("scheduled" + event, textEvent); // value saved to local storage
})

$(document).ready(function(){
    for (i = 9; i < 17; i++) {
        var recallTextEvent = localStorage.getItem("scheduled" + i);
        $("textarea" + i).html(recallTextEvent); // trying to populate the text area with the local storage
    }
    })




   
//     // Console log each of the user inputs to confirm we are receiving them
//     console.log(name);
//     console.log(email);
//     console.log(age);
//     console.log(comment);

//     //first, we retrieve the existing list and turn it into an object
//     var userList = JSON.parse(localStorage.getItem("users"))

//     //if the list doesn't already exist, create an empty array
//     if (!userList) {
//       userList = []
//     }

//     //push the new user into the array
//     userList.push({ name, email, age, comment })

//     //update localStorage to the new array 
//     localStorage.setItem("users", JSON.stringify(userList))

//     //update the display area
//     updateUserDiv()
//   });

//   function updateUserDiv() {
    
//     //use .pop() to get the last (newest) item in the array
//     var user = JSON.parse(localStorage.getItem("users")).pop()

//     //update the DOM 
//     $("#name").text(user.name)
//     $("#email").text(user.email)
//     $("#age").text(user.age)
//     $("#comment").text(user.comment)

//   }

//   //when page first loads, display the most recent user
//   updateUserDiv()