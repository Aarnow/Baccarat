import Player from "../game/player";

export let removePlayerView = (player: Element) => {
    player.querySelectorAll('.player-bet-option').forEach((betOption) => {
        betOption.classList.remove('active');
        betOption.classList.add('unactive');
    });
    player.querySelector('.amount').textContent = "-";
    player.querySelector('.amount-total').textContent = "-";
    player.querySelector('.victory').textContent = "-";
    player.querySelector('.defeat').textContent = "-";
    player.querySelector('.percent').textContent = "- %";
    player.querySelector('.input-bet').value = "";
};

export let addLineGameView = (text: string) => {
    let containerGamaManager = document.querySelector('.container-game-manager');
    let line = document.createElement('div');
    line.className = 'table-line';
    line.textContent = text;
    containerGamaManager.parentNode.insertBefore(line, containerGamaManager);
};

export let updateStatisticsView = (container: Element, player: Player) => {
    container.querySelectorAll('.player-bet-option').forEach((betOption) => {
        betOption.classList.remove('active');
        betOption.classList.add('unactive');
    });
    container.querySelector('.amount').textContent = player.getAmount().toString();
    container.querySelector('.amount-total').textContent = player.getStatistics().earning.toString();
    container.querySelector('.victory').textContent = player.getStatistics().wins.toString();
    container.querySelector('.defeat').textContent = player.getStatistics().losses.toString();
    container.querySelector('.percent').textContent = player.getStatistics().winningPercentage.toString();
    container.querySelector('.input-bet').value = "";
}

export const deleteAllLogs = () => {
    const logs = document.querySelectorAll('.container-game-manager');
    logs.forEach((log) => {
        log.remove();
    });
}