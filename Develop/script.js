//Variables 
var SpecialChar= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerCaseAlph= "abcdefghijklmnopqrstuvwxz";
var upperCaseAlph ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";

 var LenghtPass =0;
///=====Validations and get info//
function passValidations(){
  LenghtPass = parseInt(prompt("Enter the lenght that you want in you password"));
  //validation number
  if(isNaN(LenghtPass)){
    alert("Must be a number");
    return null; 
  }else if(LenghtPass < 8){
    alert("Lenght must be mayor than 8 characters");
    return null; 
  }else if (LenghtPass > 128){
    alert("Lenght must be less than 128 characters"); 
    return null;
  }

  //Get characteres to use
  var selectSpecialChar = confirm("Do you want add special characteres?");
  var selectlower = confirm("Do you want add lowercase?");
  var selectUpper = confirm("Do you want add uppercase?");
  var selectNumeric = confirm("Do you want add numbers?");

  if(selectNumeric==false && selectlower==false && selectSpecialChar == false && selectUpper== false){
    alert("Is necessary to select character type");
    return null;
  }

  //object to get info to build password
   var infoPassword = {
    LenghtPass: LenghtPass,
    selectSpecialChar : selectSpecialChar,
    selectlower : selectlower,
    selectUpper: selectUpper,
    selectNumeric: selectNumeric,
   };

  return  infoPassword; 
  ;
}

//function createPass

function generatePassword(){
  var infoPassword= passValidations();
  var buildPass = "";
  var finalPass = "";

  //get info to create pass and concat strings
  if(infoPassword.selectNumeric){
    buildPass = buildPass + numChar;
  }
  if(infoPassword.selectUpper){
    buildPass = buildPass + upperCaseAlph;
  } 
  if(infoPassword.selectlower){
    buildPass = buildPass + lowerCaseAlph;
  } 
  if(infoPassword.selectSpecialChar){
    buildPass = buildPass + SpecialChar;
  } 
  //Generate password with radn
  for(var i=0; i<infoPassword.LenghtPass; i++){
    var random = Math.floor(Math.random() * buildPass.length );
    finalPass += buildPass.charAt(random);
  }

  return finalPass;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
