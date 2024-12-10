

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/


/*Planning
set the alcohol default settings to "true"

type "register" for enter the drinking store.
it will ask the question "What's your age?"
and then push the age to the arrary.

type"toggle" to swicth the settings of alcohol
if alcohol is "true"
if user are under 19, it will show "You are not allowed in here."
if user are older than 19, it will show "You are allow to drink in here."

if alcohol is "false"
it will show "Everyone is welcome in here!"
*/

let registry = [];
let settings = {
  //alcohol setting goes here
  alcohol:true,
};

//rename this to RegisterUser
function RegisterUser(){
  //ask for the age with readline
  readline.question("What's your age?", _age =>{
    registry.push(Number(_age))
    if (_age <= 19){
      console.log("You are not allowed in here.");
      StartApp();
      }
    else {
      console.log("You are allow to drink in here.");
      StartApp();
    }
  }
  )
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){
   // Toggle the status
    settings.alcohol = !settings.alcohol;
    if(alcohol === true){
    console.log("Adults only");
  }
  if(alcohol === false){
    console.log ("Everyone is welcome in here!");
  }
  StartApp();
}

//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "register"){
      RegisterUser();
    }
    else if (_command === "toggle"){
      ToggleAlcohol();
    }
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();


