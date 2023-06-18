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
import { BetOption } from "../types.js";
class Player {
    constructor(name, statistics) {
        this.name = name;
        this.amount = 0;
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
        this.amount = bet;
    }
    getBet() {
        return this.amount;
    }
    setOption(option) {
        this.option = option;
    }
    getOption() {
        return this.option;
    }
    resetBet() {
        this.amount = 0;
        this.option = null;
    }
    getStatistics() {
        return this.statistics;
    }
    setStatistics(win) {
        let wins = win ? this.statistics.wins + 1 : this.statistics.wins;
        let losses = win ? this.statistics.losses : this.statistics.losses + 1;
        let winningPercentage = (wins / (wins + losses)) * 100;
        let earning = win ? (this.statistics.earning + (this.option === BetOption.Tie ? this.getBet() * 8 : this.getBet() * 2)) : this.statistics.earning - this.getBet();
        this.statistics = {
            wins: wins,
            losses: losses,
            winningPercentage: winningPercentage,
            earning: earning
        };
    }
}
export default Player;
