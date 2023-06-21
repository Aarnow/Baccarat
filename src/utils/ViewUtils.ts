import Player from "../game/player";

// Logs View utils
export let addLineGameView = (text: string) => {
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
    logs.forEach((log) => {
        log.remove();
    });
}

// Player View Utils
export let updateStatisticsView = (container: Element, player: Player) => {
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
