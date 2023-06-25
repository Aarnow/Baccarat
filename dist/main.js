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
import { addLineGameView, deleteAllLogs } from "./utils/ViewUtils.js";
//init game
const game = new BaccaratGame();
// PlaceBet Event Listener
const placeBet = document.getElementById('place-bet');
placeBet === null || placeBet === void 0 ? void 0 : placeBet.addEventListener('click', () => {
    deleteAllLogs();
    let bets = new Array(4);
    const players = document.querySelectorAll('.container-player');
    players === null || players === void 0 ? void 0 : players.forEach((player, index) => {
        const betOptionActiveElem = player.querySelector('.active');
        const playerBetElem = player.querySelector('.player-bet');
        if (betOptionActiveElem && playerBetElem) {
            const betOptionElem = betOptionActiveElem.querySelector('span');
            const playerBet = playerBetElem.querySelector('input');
            if (betOptionElem && playerBet) {
                const betOption = betOptionElem.textContent;
                const betPlayer = parseInt(playerBet.value);
                const newBet = {
                    amount: betPlayer,
                    option: betOption
                };
                bets[index] = newBet;
            }
        }
    });
    game.placeBets(bets);
    game.draw();
    game.isNatural();
});
// BetOption Event Listener
const betOptions = document.querySelectorAll('.player-bet-option');
betOptions.forEach((option) => {
    option.addEventListener('click', () => {
        let containerPlayer = option.closest('.container-player');
        let siblingOptions = containerPlayer === null || containerPlayer === void 0 ? void 0 : containerPlayer.querySelectorAll('.player-bet-option');
        siblingOptions === null || siblingOptions === void 0 ? void 0 : siblingOptions.forEach((siblingOption) => {
            siblingOption.classList.remove('active');
            siblingOption.classList.add('unactive');
        });
        option.classList.add('active');
        option.classList.remove('unactive');
    });
});
// RemovePlayer Event Listener
const removePlayersBtn = document.querySelectorAll('.player-leave');
removePlayersBtn.forEach((removePlayer) => {
    removePlayer.addEventListener('click', () => {
        var _a;
        const containerPlayer = removePlayer.closest('.container-player');
        const dataSeatElem = containerPlayer === null || containerPlayer === void 0 ? void 0 : containerPlayer.getAttribute('data-seat');
        if (dataSeatElem) {
            const idSeat = parseInt(dataSeatElem);
            const containerPlayerAdd = document.querySelector('.container-player-add[data-seat="' + idSeat + '"]');
            const namePlayer = (_a = game.puntos[idSeat]) === null || _a === void 0 ? void 0 : _a.getName();
            const playerNameElem = containerPlayerAdd === null || containerPlayerAdd === void 0 ? void 0 : containerPlayerAdd.querySelector('.player-name');
            game.removePlayer(idSeat);
            containerPlayer === null || containerPlayer === void 0 ? void 0 : containerPlayer.classList.add('hide');
            containerPlayerAdd === null || containerPlayerAdd === void 0 ? void 0 : containerPlayerAdd.classList.remove('hide');
            playerNameElem.value = "";
            addLineGameView("Le joueur " + namePlayer + " a quitté la partie.");
        }
        console.log(game.puntos, 'Retrait d\'un joueur');
    });
});
// AddPlayer Event Listener
const addPlayerBtn = document.querySelectorAll('.player-add');
addPlayerBtn.forEach((addPlayer) => {
    addPlayer.addEventListener('click', () => {
        const containerPlayerAdd = addPlayer.closest('.container-player-add');
        const dataSeatElem = containerPlayerAdd === null || containerPlayerAdd === void 0 ? void 0 : containerPlayerAdd.getAttribute('data-seat');
        if (dataSeatElem) {
            const idSeat = parseInt(dataSeatElem);
            const containerPlayer = document.querySelector('.container-player[data-seat="' + idSeat + '"]');
            const namePlayerElem = containerPlayerAdd === null || containerPlayerAdd === void 0 ? void 0 : containerPlayerAdd.querySelector('.player-name');
            const namePlayer = namePlayerElem.value;
            const playerNameElem = containerPlayer === null || containerPlayer === void 0 ? void 0 : containerPlayer.querySelector('span.player-name');
            game.addPlayer(new Player(namePlayer), idSeat);
            containerPlayerAdd === null || containerPlayerAdd === void 0 ? void 0 : containerPlayerAdd.classList.add('hide');
            containerPlayer === null || containerPlayer === void 0 ? void 0 : containerPlayer.classList.remove('hide');
            if (playerNameElem)
                playerNameElem.textContent = namePlayer;
            addLineGameView("Le joueur " + namePlayer + " a rejoint la partie.");
        }
        console.log(game.puntos, 'Ajout d\'un joueur');
    });
});
