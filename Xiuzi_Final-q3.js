const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/


/* Planning
Put the color: "red", "green", "blue", "yellow", and "orange" to the theme, let the defult are true.

Type "add color"
it will show a question"Which color do you want to add to the theme? " 
user can add a color to the theme,
if the color is not belong to those 5 color,
users cannot add the color to the theme
it will shows "Cannot add".
If the color is in those 5 color, you can add the color to the theme
it will show "xxx has been added to the theme."

Type "show color themes"
users can loop the colors they just added to the theme

When user want to remove a color,
they need to toggle the color first by typing "toggle a color".
Then type "remove a color", and now type the same color that just toggled
then you can remove it, and at the same time,  a new array just created.

By typing "show color themes", you can check the new array.
 */


let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red: true,
  green: true,
  blue: true,
  yellow: true,
  orange: true,
};

//rename this to AddUserColor
function AddUserColor() {
  //add a color to userColors
  readline.question("Which color do you want to add to the theme? ", _color => {
    let checkcolor = false;
    // Check if the fruit is allowed and available
    if (theme[_color] === true) {
      userColors.push(_color);
      console.log(`${_color} has been added to the theme.`);
    } else {
      console.log("Cannot add.");
    }
    StartApp();
  });
}

//rename this to DisplayUserColors
function DisplayUserColors() {
  //add a color to userColors
  for (let i = 0; i < userColors.length; i++) {
    //console.log fruits
    console.log(`The color theme is ${userColors[i]}.`)
  }
  StartApp();
}


//rename this to ToggleThemeColor
function ToggleThemeColor() {
  //ask for a color to toggle
  readline.question("Which color do you want to toggle? ", _color => {
    for (let key in theme) {
      if (_color === key) {
        //toggle it cause the color exists
      }
    }
    StartApp();
  })
}


function RemoveThemeColor() {
  readline.question("Which color do you want to remove? ", _color => {

    let newColorArray = [];
    for (let i= 0; i < userColors.length; i++) {

      if (_color != userColors[i]) {
        newColorArray.push(userColors[i]);
      }
      StartApp();
    }
    userColors = newColorArray;
  });
}




function StartApp() {
  readline.question("What is your command? ", _command => {
    if (_command === "quit") {
      readline.close();
    }
    else if (_command === "add color") {
      AddUserColor();
    }
    else if (_command === "show color themes") {
      console.log("You need to add a color first.")
      DisplayUserColors();
    }
    else if (_command === "toggle a color") {
      ToggleThemeColor();
    }
    else if (_command === "remove a color") {
      RemoveThemeColor();
    }
    else {
      StartApp();
    }
  })
}

StartApp();