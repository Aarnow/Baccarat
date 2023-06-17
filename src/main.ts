// Imports
// EXMEPLE: import { deck } from "./game/app.js";

// HTML Elements
// EXEMPLE: const dealCardButton = document.getElementById("btn-dealCard");

// Events handler

// Initialisation
// EXEMPLE: dealCardButton?.addEventListener("click", () => deck.dealCard());

//-----------------------------------------------------debug
import BaccaratGame from "./game/baccaratGame.js";

//init game
const game = new BaccaratGame();

//table
game.addPlayer("bob", 1);
game.addPlayer("John", 0);
game.addPlayer("Marcel", 3);
game.addPlayer("Antonio", 2);
game.addPlayer("Veronique", 3);

//draw
game.draw();

console.log("banker", game.banker);
console.log("player", game.player);
console.log("deck", game.deck.getDeckSize());

game.placeBets([0, 50, 20, 0]);

console.log("table", game.puntos)