const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/



/*Planning
Put the "new", "easy", "medium", "hardest", and "apocolypse" into the badge, make it default "0".

Type the "status", it will loop every mode in the function ShowStatus.

Type the "add" in order to add points to each badge,
it will ask user the question:
"Which badge you want to add? 'new', 'easy', 'medium', 'hardest', and 'apocolypse'", 
type any of the world in the sentence and it will add one point to the badge which user just chose.

Type "points summary", it allows user to know which status they are in base on how many points they have in total.
less than 10 points-> it will show "horrible newbie"
10 and 20 points-> it will show "adventurer"
20 to 30 points-> it will show "slayer"
30 to 40 points-> it will show "divined"
40 points-> it will show "eternal"

*/

let badge = {
  //modes go here
  new: 0,
  easy: 0,
  medium: 0,
  hardest: 0,
  apocolypse: 0,
};

//rename this to ShowStatus
function ShowStatus() {
  //loop through the badge and log all the mode and all their corresponding points
  for (let key in badge) {
    console.log("The points for", key, "is", badge[key]);
  }
  StartApp();
}


//rename this to AddPoints
function AddPoints() {
  //Add the point to the correct mode by capturing the readline
  readline.question("Which badge you want to add? 'new', 'easy', 'medium', 'hardest', and 'apocolypse'.", _points => {

    let checkbadge = false;

    for (let key in badge) {
      if (key === _points) {
        checkbadge = true;
      }
    }

    if (checkbadge === true) {
      badge[_points]++;
    }
    StartApp();
  })

}


function MakeBadge() {
  let totalPoints = 0;
  for (let points in badge) {
    totalPoints += badge[points];
  }
  let pointsStatus = "";
  if (totalPoints < 10) {
    pointsStatus = "horrible newbie";
  } else if (totalPoints >= 10 && totalPoints <= 20) {
    pointsStatus = "adventurer";
  } else if (totalPoints >= 20 && totalPoints <= 30) {
    pointsStatus = "slayer";
  } else {
    pointsStatus = "eternal";
  }
  console.log(`Total poins: ${totalPoints}. Points status: ${pointsStatus}`);
  StartApp();
}


  function StartApp() {
    readline.question("What is your command? ", _command => {
      if (_command === "status") {
        ShowStatus();
      }
      else if (_command === "quit") {
        readline.close();
      }
      else if (_command === "add") {
        AddPoints();
      }
      else if (_command === "points summary")
        MakeBadge();
      else {
        console.log("Invalid command. Try 'status', 'add', or 'points summary' or 'quit'.");
        StartApp(); 
        }
    }
    )
  }
  StartApp();