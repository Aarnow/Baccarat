/**
 * Class Player
 *
 * Cette classe représente le modèle d'un joueur.
 * Elle fournit des opérations pour manipuler :
 *      - le pari
 *      - le choix
 *      - les stats
 *
 * @version : 0.01
 * */
class Player {
    constructor(name, statistics) {
        this.name = name;
        this.bet = 0;
        this.option = null;
        this.statistics = statistics ? statistics : this.initializePlayerStatistics();
    }
    initializePlayerStatistics() {
        return {
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            earning: 0
        };
    }
    setBet(bet) {
        this.bet = bet;
    }
    getBet() {
        return this.bet;
    }
    setOption(option) {
        this.option = option;
    }
    getOption() {
        return this.option;
    }
    resetBet() {
        this.bet = 0;
    }
}
export default Player;
