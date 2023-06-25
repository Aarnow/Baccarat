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
    getName() {
        return this.name;
    }
    setAmount(bet) {
        this.amount = bet;
    }
    getAmount() {
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
    calcPayout() {
        const commission = 0.9; //casino takes 10% on winning bets
        return Math.floor((this.option === BetOption.Tie ? this.getAmount() * 8 : this.getAmount() * 2) * commission);
    }
    setStatistics(win) {
        let wins = win ? this.statistics.wins + 1 : this.statistics.wins;
        let losses = win ? this.statistics.losses : this.statistics.losses + 1;
        let winningPercentage = (wins / (wins + losses)) * 100;
        let earning = win ? (this.statistics.earning + this.calcPayout()) : this.statistics.earning - this.getAmount();
        console.log("player-----:", this.name);
        console.log("wins", wins);
        console.log("losses", losses);
        console.log("earning", earning);
        this.statistics = Object.assign(Object.assign({}, this.statistics), {
            wins: wins,
            losses: losses,
            winningPercentage: winningPercentage,
            earning: earning
        });
    }
}
export default Player;
