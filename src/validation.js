function validationPassword(){
    
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


    // validate letters
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        return false
    }
 
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    return false
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    return false
  }
}
function showHint() {
    const message = document.getElementById("message") 

message.classList.add("inline-block")

message.classList.remove("hidden")
  }
function hideHint() {
const message = document.getElementById("message") 

    message.classList.remove("inline-block")
message.classList.add("hidden")
  }
export  {
    validationPassword,showHint,hideHint
}