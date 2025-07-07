// hello frenemy io code...
// const readline = require("readline");
// const readlineInterface = readline.createInterface(
//   process.stdin,
//   process.stdout
// );

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// }

// let enemyList = [
//   "darth vader",
//   "voldemort",
//   "palpatine",
//   "lex luthor",
//   "sauron",
//   "saruman",
//   "balrogs",
//   "ganondorf",
//   "majoras mask",
// ]; //set up array of enemies

// async function respond() {
//   let visitor = await ask("Who goes there?"); //set up await portion of async function
//   if (visitor === "darth vader") {
//     console.log("Noooooo! That's impossible!"); //set specific response to darth vader
//   } else if (enemyList.includes(visitor)) {
//     console.log(`Go away ${visitor}!`); //set response for generic enemy
//   } else {
//     console.log("Hello good friend, come join us at the bar!"); //welcome in your friends
//   }

//   process.exit(); //kill the process
// }

// respond(); //call the function

// new code for form/web page
const userInput = document.getElementById("user-input");
const computerResponse = document.getElementById("computer-response");
const nameForm = document.getElementById("name-form");

nameForm.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent default submit action

  const userName = userInput.value.toLowerCase(); //grab value from user-input
  const enemyList = [
    "darth vader",
    "voldemort",
    "palpatine",
    "lex luthor",
    "sauron",
    "saruman",
    "balrogs",
    "ganondorf",
    "majoras mask",
  ]; //set up array of enemies

  if (enemyList.includes(userName)) {
    computerResponse.textContent = `Go Away ${userName}!!!`;
  } else {
    computerResponse.textContent = `Hello ${userName}, come join us at the bar!`;
  }

  nameForm.reset()
});
