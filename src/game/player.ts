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

import { BetOption, PlayerStatistics } from "../types.js"

class Player {
    private name: string;
    private amount: number;
    private option: BetOption | null;
    private statistics: PlayerStatistics;

    constructor(name: string, statistics?: PlayerStatistics){
        this.name = name;
        this.amount = 0;
        this.option = null;
        this.statistics = statistics ? statistics : this.initializePlayerStatistics()
    }

    private initializePlayerStatistics(): PlayerStatistics{
        return {
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            earning: 0
        }
    }

    public setAmount(bet: number): void {
        this.amount = bet;
    }

    public getAmount(): number{
        return this.amount;
    }

    public setOption(option: BetOption): void {
        this.option = option;

    }

    public getOption(): BetOption | null {
        return this.option;
    }

    public resetBet(): void {
        this.amount = 0;
        this.option = null;
    }

    public getStatistics(): PlayerStatistics{
        return this.statistics;
    }

    public calcPayout(): number{
        const commission = 0.9; //casino takes 10% on winning bets
        return (this.option === BetOption.Tie ? this.getAmount() * 8 : this.getAmount() * 2) * commission
    }

    public setStatistics(win : boolean): void{
        let wins = win ? this.statistics.wins + 1 : this.statistics.wins;
        let losses = win ? this.statistics.losses : this.statistics.losses + 1;
        let winningPercentage = (wins / (wins + losses)) * 100;
        let earning = win ? (this.statistics.earning + this.calcPayout()) : this.statistics.earning - this.getAmount();

        console.log("player-----:", this.name)
        console.log("wins", wins);
        console.log("losses", losses);
        console.log("earning", earning);

        this.statistics = {...this.statistics, ...{
            wins: wins,
            losses: losses,
            winningPercentage: winningPercentage,
            earning: earning
        }};
    }
}

export default Player;