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
import {addLineGameView, removePlayerView} from "./utils/ViewUtils.js";

//init game
const game = new BaccaratGame();

//new player
let p1 = new Player("bob");


//join table
game.addPlayer(p1, 2);

//bet

console.log("la table vient de parier: ", game.puntos)

//draw
game.draw();

console.log("main du banquier: ",game.banker);
console.log("main du joueur: ",game.player);

//check third draw + result + 
game.isNatural();

console.log("main du banquier: ",game.banker);
console.log("main du joueur: ",game.player);

console.log("résultat: ",game.result);

//payment
game.payoutBets();
console.log("cagnotte du casino: ", game.bankroll);
console.log("statistics des joueurs à table: ", game.puntos)


// PlaceBet Event Listener
const placeBet = document.getElementById('place-bet');
placeBet.addEventListener('click', () => {
    let bets: Bet[] = [];
    const players = document.querySelectorAll('.container-player');

    console.log("Natoo vient de quitter la table: ", game.puntos)
    players.forEach((player) => {
        const betOption: BetOption = player?.querySelector('.active')?.querySelector('span').textContent as BetOption;
        const betPlayer = parseInt(player?.querySelector('.player-bet')?.querySelector('input').value);
        const newBet: Bet = {
            amount : betPlayer,
            option : betOption
        }
        bets.push(newBet);
    });
    game.placeBets(bets);
});

// BetOption Event Listener
const betOptions = document.querySelectorAll('.player-bet-option');
betOptions.forEach((option) => {
    option.addEventListener('click', () => {
        let containerPlayer = option.closest('.container-player');

        if(containerPlayer) {
            let siblingOptions = containerPlayer.querySelectorAll('.player-bet-option');

            siblingOptions.forEach((siblingOption) => {
                siblingOption.classList.remove('active');
                siblingOption.classList.add('unactive');
            });

            option.classList.add('active');
            option.classList.remove('unactive');
        }
    });
});

// RemovePlayer Event Listener
const removePlayersBtn = document.querySelectorAll('.player-leave');
removePlayersBtn.forEach((removePlayer) => {
    removePlayer.addEventListener('click', () => {
        let containerPlayer = removePlayer.closest('.container-player');

        if(containerPlayer) {
            removePlayerView(containerPlayer);
            game.removePlayer(parseInt(containerPlayer.getAttribute('data-player')));
            addLineGameView("Le joueur a quitté la partie");
        }
    });
});
