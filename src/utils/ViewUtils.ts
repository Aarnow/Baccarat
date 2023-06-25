import Hand from "../game/hand.js";
import Player from "../game/player.js";

// Logs View utils
export const addLineGameView = (text: string) => {
    let containerGamaManager = document.querySelector('.container-game-manager');
    let line = document.createElement('div');

    line.className = 'table-line';
    line.textContent = text;

    if(containerGamaManager && containerGamaManager.parentNode){
        containerGamaManager.parentNode.insertBefore(line, containerGamaManager);
    }
};
export const deleteAllLogs = () => {
    const logs = document.querySelectorAll('.table-line');
    const logsClipboard = document.querySelectorAll('.container-clipboard');
    logs.forEach((log) => {
        log.remove();
    });
    logsClipboard.forEach((log) => {
        log.remove();
    });
}

// Logs + copyClipboard
export const addLineGameCopyClipboard = (playerCards: Hand, bankerCards: Hand) => {
    const containerGameManager = document.querySelector('.container-game-manager');
    const containerClipboardElem = document.createElement('div');
    containerClipboardElem.className = 'container-clipboard';

    // Player hand

    const clipboardPlayerElem = document.createElement('div');
    const copyTextPlayerElem = document.createElement('div');
    const betOptionPlayerElem = document.createElement('span');
    const handPlayerElem = document.createElement('span');
    const scorePlayerElem = document.createElement('span');
    const buttonPlayer = document.createElement('button');
    const playerTuple = playerCards.getCards();
    let playerHand = '';

    for(const card of playerTuple) {
        if (card){
            playerHand += "[" + card.getName() + "] ";

        }
    }


    clipboardPlayerElem.className = 'clipboard clipboard-left';
    copyTextPlayerElem.className = 'copyText';
    betOptionPlayerElem.textContent = "Player :";
    handPlayerElem.textContent = playerHand;
    scorePlayerElem.textContent = "Score : " + playerCards.getTotalValue().toString();

    buttonPlayer.textContent = 'Copy';
    buttonPlayer.onclick = () => copyClipboard(buttonPlayer);

    clipboardPlayerElem.appendChild(copyTextPlayerElem);
    clipboardPlayerElem.appendChild(buttonPlayer);

    copyTextPlayerElem.appendChild(betOptionPlayerElem);
    copyTextPlayerElem.appendChild(document.createElement('br'));
    copyTextPlayerElem.appendChild(handPlayerElem);
    copyTextPlayerElem.appendChild(document.createElement('br'));
    copyTextPlayerElem.appendChild(scorePlayerElem);

    containerClipboardElem.appendChild(clipboardPlayerElem);

    // Banker hand
    const clipboardBankerElem = document.createElement('div');
    const copyTextBankerElem = document.createElement('div');
    const betOptionBankerElem = document.createElement('span');
    const handBankerElem = document.createElement('span');
    const scoreBankerElem = document.createElement('span');
    const buttonBanker = document.createElement('button');
    const bankerTuple = bankerCards.getCards()
    let bankerHand = '';

    for(const card of bankerTuple) {
        if (card){
            bankerHand += "[" + card.getName() + "] ";
        }
    }

    clipboardBankerElem.className = 'clipboard clipboard-right';
    copyTextBankerElem.className = 'copyText';
    betOptionBankerElem.textContent = "Banker :";
    handBankerElem.textContent = bankerHand;
    scoreBankerElem.textContent = "Score : " + bankerCards.getTotalValue().toString();

    buttonBanker.textContent = 'Copy';
    buttonBanker.onclick = () => copyClipboard(buttonBanker);

    clipboardBankerElem.appendChild(copyTextBankerElem);
    clipboardBankerElem.appendChild(buttonBanker);

    copyTextBankerElem.appendChild(betOptionBankerElem);
    copyTextBankerElem.appendChild(document.createElement('br'));
    copyTextBankerElem.appendChild(handBankerElem);
    copyTextBankerElem.appendChild(document.createElement('br'));
    copyTextBankerElem.appendChild(scoreBankerElem);

    containerClipboardElem.appendChild(clipboardBankerElem);

    if(containerGameManager && containerGameManager.parentNode){
        containerGameManager.parentNode.insertBefore(containerClipboardElem, containerGameManager);
    }
}

export const copyClipboard = (div: Element) => {
    const toCopy = div.parentNode?.querySelector('.copyText');
    div.textContent = "Copied !";
    setTimeout(() => {
        div.textContent = "Copy"
    }, 1000);
    navigator.clipboard.writeText((toCopy as HTMLElement).innerText);
}

// Player View Utils
export const updateStatisticsView = (container: Element, player: Player) => {

    
    const amountElem = container.querySelector('.amount');
    const amountTotalElem = container.querySelector('.amount-total');
    const victoryElem = container.querySelector('.victory');
    const defeatElem = container.querySelector('.defeat');
    const percentElem = container.querySelector('.percent');


    container.querySelectorAll('.player-bet-option').forEach((betOption) => {
        betOption.classList.remove('active');
        betOption.classList.add('unactive');
    });

    if(amountElem) amountElem.textContent = player.getAmount().toString();
    if(amountTotalElem) amountTotalElem.textContent = player.getStatistics().earning.toString();
    if(victoryElem) victoryElem.textContent = player.getStatistics().wins.toString();
    if(defeatElem) defeatElem.textContent = player.getStatistics().losses.toString();
    if(percentElem) percentElem.textContent = player.getStatistics().winningPercentage.toString();

    let input = container.querySelector('.input-bet') as HTMLInputElement;
    input.value = "";
}
