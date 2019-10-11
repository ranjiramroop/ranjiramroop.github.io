//Creating Variables for the password character choices.
var uppercase;
var lowercase;
var numero;
var specialCharacters;

//Created strings for each Variable.
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowercase = "abcdefghijklmnopqrstuvwxyz";
numero = "0123456789";
specialCharacters = "~`!@#$%^&*()_-+=:;?.,";

var quantityCharacter = document.getElementById("quantityCharacter");
var btngenerate = document.getElementById("btngenerate");
var btncopy = document.getElementById("btncopy");

//Create Function to check Boolean on each Variable.
var radioYes = document.getElementById("radioYes"); //uppercase 
var radioNo = document.getElementById("radioNo"); //uppercase
var radioYesL = document.getElementById("radioYesL"); //lowercase 
var radioNoL = document.getElementById("radioNoL");//lowercase
var radioYesNum = document.getElementById("radioYesNum"); //number 
var radioNoNum = document.getElementById("radioNoNum"); //number
var radioYesSym = document.getElementById("radioYesSym"); //specialCharacters 
var radioNoSym = document.getElementById("radioNoSym"); //specialCharacters
var password = document.getElementById("outputPassword");


// radioYes === true;
// radioYesL === true; 
// radioYesNum === true;
// radioYesSym === true; 
// radioNo === false; 
// radioNoL === false;
// radioNoNum === false; 
// radioNoSym === false; 

//The No's are false because I only want to maninpulate the Yes's.
radioYes.checked === true;
radioYesL.checked === true; 
radioYesNum.checked === true;
radioYesSym.checked === true; 
radioNo.checked === false; 
radioNoL.checked === false;
radioNoNum.checked === false; 
radioNoSym.checked === false; 

//should get 15 combinations when the user selects the Yes boxes.

var ulns = uppercase + lowercase + numero + specialCharacters;
var uls = uppercase + lowercase + specialCharacters;
var uln = uppercase + lowercase + numero;
var uns = uppercase + numero + specialCharacters;
var lns = lowercase + numero + specialCharacters;
var ul = uppercase + lowercase;
var un = uppercase + numero;
var us = uppercase + specialCharacters;
var ln = lowercase + numero;
var ls = lowercase + specialCharacters;
var ns = numero + specialCharacters;


//This function checks and logs whether radio boxes are checked
function checkRadio() 
{
  console.log(radioYes.checked);
  console.log(radioYesL.checked);
  console.log(radioYesNum.checked);
  console.log(radioYesSym.checked);
  console.log(radioNo.checked);
  console.log(radioNoL.checked);
  console.log(radioNoNum.checked);
  console.log(radioNoSym.checked);
}

//This function checks and logs values which is used on the quantityCharacter.
function checkVal() {
  console.log(quantityCharacter.value)
}

btngenerate.addEventListener("click",function(event){
  event.preventDefault();
  checkRadio();
  checkVal();
  //each time the button is clicked, the old variables are replaced with the new.

  var loadInfo = ""; //this string will load in the variables for the password.
  var password = ""; //this string will take in the loadInfo information, then push to display the password on the site.

  if (quantityCharacter.value < 8 || quantityCharacter.value > 128) { 
    document.getElementById("missingnumber").innerHTML = "Please select a number between 8 and 128.";
    document.getElementById("missingcriteria").innerHTML = "";
  }
  else if (!radioYes.checked && !radioYesL.checked && !radioYesNum.checked && !radioYesSym.checked)  {
    document.getElementById("missingnumber").innerHTML = "";
    document.getElementById("missingcriteria").innerHTML = "Please select at least one 'Yes' on options 2-5.";
    }
    else {
      document.getElementById("missingnumber").innerHTML = "";
      document.getElementById("missingcriteria").innerHTML = "";  
  }
  if (radioYes.checked && radioYesL.checked && radioYesNum.checked && radioYesSym.checked) 
    { 
      loadInfo = ulns;
    }
    else if (radioYes.checked && radioYesL.checked && radioYesSym.checked)
      {
        loadInfo = uls;
      }
    else if (radioYes.checked && radioYesL.checked && radioYesNum.checked)
      {
        loadInfo = uln;
      }
    else if (radioYes.checked && radioYesNum.checked && radioYesSym.checked)
      {
        loadInfo = uns;
      }
    else if (radioYesL.checked && radioYesNum.checked && radioYesSym.checked)
      {
        loadInfo = lns;
      }
    else if (radioYes.checked && radioYesL.checked)
      {
        loadInfo = ul;
      }
    else if (radioYes.checked && radioYesNum.checked)
      {
        loadInfo = un;
      }
    else if (radioYes.checked && radioYesSym.checked)
      {
        loadInfo = us;
      }
    else if (radioYesL.checked && radioYesNum.checked)
      {
        loadInfo = ln;
      }
    else if (radioYesL.checked && radioYesSym.checked)
      {
        loadInfo = ls;
      }
    else if (radioYesNum.checked && radioYesSym.checked)
      {
        loadInfo = ns;
      }
    else if (radioYes.checked)
      {
        loadInfo = uppercase;
      }
    else if (radioYesL.checked)
      {
        loadInfo = lowercase;
      }
    else if (radioYesNum.checked)
      {
        loadInfo = numero;
      }
    else if (radioYesSym.checked)
      {
        loadInfo = specialCharacters;
      }
      else {document.getElementById("failed").innerHTML = "An error has occurred. Please refresh the browser and try again.";
    }
      while (password.length < quantityCharacter.value) {
        password += loadInfo[Math.floor(Math.random() * loadInfo.length)];
      }
     document.getElementById("outputPassword").value = password;
      document.getElementById("outputPassword").style.width="100%";
     btncopy.addEventListener("click",function(){
       document.getElementById("outputPassword").select();
       document.execCommand("copy");
      });
    }
)

//i should have done something like this for my logic instead of creating the multiple combinations this:
//  ar availableChars= "";
//   var password = "";

//   if (numbtn.checked) {
//     password =+ nums.charAt(randomChar)
//     availableChars += nums
//   }
//   if (specialbtn.checked) {
//     availableChars += special
//   }
//   if (lowerbtn.checked) {
//     availableChars += lowercase
//   }
//   if (upperbtn.checked) {
//     availableChars += upper
//   }