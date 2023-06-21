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
import {addLineGameView, removePlayerView, updateStatisticsView} from "./utils/ViewUtils.js";

//init game
const game = new BaccaratGame();

/*
console.log("main du banquier: ",game.banker);
console.log("main du joueur: ",game.player);

console.log("main du banquier: ",game.banker);
console.log("main du joueur: ",game.player);
console.log("résultat: ",game.result);
console.log("cagnotte du casino: ", game.bankroll);
console.log("statistics des joueurs à table: ", game.puntos)
*/

// PlaceBet Event Listener
const placeBet = document.getElementById('place-bet');
placeBet.addEventListener('click', () => {
    let bets: Bet[] = [];
    const players = document.querySelectorAll('.container-player');

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
    game.draw();

    /*game.isNatural();
    game.payoutBets();
    console.log("main du banquier: ",game.banker);
    console.log("main du joueur: ",game.player);
    console.log("résultat: ",game.result);
    console.log("cagnotte du casino: ", game.bankroll);
    console.log("statistics des joueurs à table: ", game.puntos)
    players.forEach((player) => {
        updateStatisticsView(player, game.player[parseInt(player.getAttribute('data-seat'))]);
    });*/

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
        let idSeat = parseInt(containerPlayer.getAttribute('data-seat'));
        let containerPlayerAdd = document.querySelector('.container-player-add[data-seat="' + idSeat + '"]');
        let namePlayer = game.puntos[idSeat].getName();

        if(containerPlayer) {
            game.removePlayer(idSeat);
            containerPlayer.classList.add('hide');
            containerPlayerAdd.classList.remove('hide');
            containerPlayerAdd.querySelector('.player-name').value = "";
            addLineGameView("Le joueur " + namePlayer + " a quitté la partie.");
        }
    });
});

// AddPlayer Event Listener
const addPlayerBtn = document.querySelectorAll('.player-add');
addPlayerBtn.forEach((addPlayer) => {
   addPlayer.addEventListener('click', () => {
       let containerPlayerAdd = addPlayer.closest('.container-player-add');
       let idSeat = parseInt(containerPlayerAdd.getAttribute('data-seat'));
       let containerPlayer = document.querySelector('.container-player[data-seat="' + idSeat + '"]');
       let namePlayer = containerPlayerAdd.querySelector('.player-name').value;

       if(containerPlayerAdd && containerPlayer) {
           game.addPlayer(new Player(namePlayer), idSeat);
           containerPlayerAdd.classList.add('hide');
           containerPlayer.classList.remove('hide');
           containerPlayer.querySelector('span.player-name').textContent = namePlayer;
           addLineGameView("Le joueur " + namePlayer + " a rejoint la partie.");
       }
   })
});
