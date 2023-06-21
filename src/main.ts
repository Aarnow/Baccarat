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
import {addLineGameView, updateStatisticsView} from "./utils/ViewUtils.js";

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
if(placeBet) placeBet.addEventListener('click', () => {
    let bets: Bet[] = [];
    const players = document.querySelectorAll('.container-player');

    if(players){
        players.forEach((player) => {
            const betOptionActiveElem = player.querySelector('.active');
            const playerBetElem = player.querySelector('.player-bet');
            if(betOptionActiveElem && playerBetElem){
                const betOptionElem = betOptionActiveElem.querySelector('span');
                const playerBet = playerBetElem.querySelector('input') as HTMLInputElement;

                if (betOptionElem && playerBet){
                    const betOption: BetOption = betOptionElem.textContent as BetOption;
                    const betPlayer = parseInt(playerBet.value);
                    const newBet: Bet = {
                        amount : betPlayer,
                        option : betOption
                    }

                    bets.push(newBet);
                }
            }
        });
        game.placeBets(bets);
        game.draw();

        /*game.isNatural();
        game.payoutBets();
        console.log("main du banquier: ",game.banker);
        console.log("main du joueur: ",game.player);
        console.log("résultat: ",game.result);
        console.log("cagnotte du casino: ", game.bankroll);
        console.log("statistics des joueurs à table: ", game.puntos)*/
    }
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
        const containerPlayer = removePlayer.closest('.container-player');

        if(containerPlayer) {
            const dataSeatElem = containerPlayer.getAttribute('data-seat');

            if(dataSeatElem) {
                const idSeat = parseInt(dataSeatElem);
                const containerPlayerAdd = document.querySelector('.container-player-add[data-seat="' + idSeat + '"]');

                if(containerPlayerAdd && game.puntos[idSeat] !== undefined) {
                    const namePlayer = game.puntos[idSeat].getName();
                    const playerNameElem = containerPlayerAdd.querySelector('.player-name') as HTMLInputElement;

                    game.removePlayer(idSeat);
                    containerPlayer.classList.add('hide');
                    containerPlayerAdd.classList.remove('hide');
                    playerNameElem.value = "";
                    addLineGameView("Le joueur " + namePlayer + " a quitté la partie.");
                }
            }
        }
    });
});

// AddPlayer Event Listener
const addPlayerBtn = document.querySelectorAll('.player-add');
addPlayerBtn.forEach((addPlayer) => {
   addPlayer.addEventListener('click', () => {
       const containerPlayerAdd = addPlayer.closest('.container-player-add');

       if(containerPlayerAdd){
           const dataSeatElem = containerPlayerAdd.getAttribute('data-seat');

           if(dataSeatElem){
               const idSeat = parseInt(dataSeatElem);
               const containerPlayer = document.querySelector('.container-player[data-seat="' + idSeat + '"]');

               if(containerPlayer) {
                   const namePlayerElem = containerPlayerAdd.querySelector('.player-name') as HTMLInputElement;
                   const namePlayer = namePlayerElem.value;
                   const playerNameElem = containerPlayer.querySelector('span.player-name');

                   game.addPlayer(new Player(namePlayer), idSeat);
                   containerPlayerAdd.classList.add('hide');
                   containerPlayer.classList.remove('hide');
                   if(playerNameElem) playerNameElem.textContent = namePlayer;
                   addLineGameView("Le joueur " + namePlayer + " a rejoint la partie.");
               }
           }
       }
   })
});
