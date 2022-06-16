function validationPassword(){
    
    var myInput = document.getElementById("psw");
    var uppercase = document.getElementById("uppercase");
    var lowercase = document.getElementById("lowercase");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


    // validate lowercase
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
        return false
    }
 
    // validate uppercase
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
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
      console.log('length', myInput.value.length)
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