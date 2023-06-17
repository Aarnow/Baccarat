// Imports
// EXMEPLE: import { deck } from "./game/app.js";

// HTML Elements
// EXEMPLE: const dealCardButton = document.getElementById("btn-dealCard");

// Events handler

// Initialisation
// EXEMPLE: dealCardButton?.addEventListener("click", () => deck.dealCard());

//-----------------------------------------------------debug
import BaccaratGame from "./game/baccaratGame.js";
import Player from "./game/player.js";
import { BetOption, Bet } from "./types.js";

//init game
const game = new BaccaratGame();

//new player
let p1 = new Player("bob");
let p2 = new Player("John");

//join table
game.addPlayer(p1, 2);
game.addPlayer(p2, 1);

//bet
p1.setOption(BetOption.Player);
p2.setOption(BetOption.Tie);

game.placeBets(
    [
        {amount: 0,
        option: null},
        {amount: 50,
        option: BetOption.Banker},
        {amount: 20,
        option: BetOption.Tie},
        {amount: 0,
        option: null}
    ]
);

//draw
game.draw();

//payment
game.payoutBets();