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
console.log("add");
game.addPlayer("bob", 2);
console.log("add");
game.addPlayer("John", 3);
console.log("add");
game.addPlayer("Marcel", 2);
console.log("add");
game.addPlayer("Veronique", 0);
game.removePlayer(0);
//draw
game.draw();
console.log("banker", game.banker);
console.log("player", game.player);
console.log("deck", game.deck.getDeckSize());
game.placeBets([0, 50, 20, 0]);
console.log("table", game.puntos);
