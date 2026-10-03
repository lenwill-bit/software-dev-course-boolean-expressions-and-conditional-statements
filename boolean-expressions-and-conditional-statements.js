/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
// NEW: additional items
const hasSword = true;
const hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  // NEW: a choice inside the mountains path
  console.log("A growl echoes from a cave ahead.");
  const caveChoice = readline.question("Do you 'enter' the cave or 'sneak' past it?");

  if (caveChoice === "enter" && hasSword) {
    console.log("A wolf leaps out, but you hold it off with your sword. Behind it, you find a chest of gold!");
  } else if (caveChoice === "enter" && !hasSword) {
    console.log("A wolf leaps out and you have nothing to defend yourself with. You flee down the mountain.");
  } else if (caveChoice === "sneak" && (hasCompass || hasMap)) {
    console.log("You find a hidden trail around the cave and reach the summit safely.");
  } else {
    console.log("You lose the trail in the fog and wander until morning.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  // NEW: a choice inside the village path
  console.log("A guard blocks the village gate.");
  const answer = readline.question("The guard asks, 'Friend or foe?'");

  if (answer === "friend" && !hasSword) {
    console.log("The guard smiles and lets you in. A merchant offers you a warm meal.");
  } else if (answer === "friend" && hasSword) {
    console.log("The guard eyes your sword but lets you in once you promise to keep it sheathed.");
  } else if (answer === "foe" || hasCompass) {
    console.log("The guard refuses entry. You camp outside the gate for the night.");
  } else {
    console.log("The guard doesn't understand your answer and sends you away.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/